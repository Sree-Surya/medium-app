import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    authorId: string;
  };
}>();

// blog.use(logger());

blog.use("/*", async (c, next) => {
  const authorizationToken = c.req.header("authorization") || "";

  const token = authorizationToken.split(" ")[1];
  const response = await verify(token, c.env.JWT_SECRET);

  const payload = response as JWTPayload & { id: string };
  if (payload) {
    c.set("authorId", payload.id);

    await next();
  } else {
    return c.json({
      error: "unauthorized",
    });
  }
});

blog
  .post("/", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
      const blogPost = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: c.get("authorId"),
        },
      });
      return c.json({
        message: "blog added successfully",
        id: blogPost.id,
      });
    } catch (e) {
      return c.json({
        error: e,
      });
    }
  })
  .get(async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
      const blog = await prisma.post.findMany({
        where: {
          authorId: c.get("authorId"),
        },
      });
      return c.json({
        blog,
        message: "blogs fetched successfully",
      });
    } catch (e) {
      return c.json({
        error: e,
      });
    }
  })
  .put(async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
      const blog = await prisma.post.update({
        where: {
          id: body.id,
        },
        data: {
          title: body.title,
          content: body.content,
        },
      });
      return c.json({
        message: "blog updated successfully",
        id: blog.id,
      });
    } catch (e) {
      return c.json({
        error: e,
      });
    }
  });

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blogs,
    });
  } catch (e) {
    return c.json({
      error: e,
    });
  }
});

blog.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return c.json(blog);
});
