import type { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-10">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-600 pt-3">
              Published on July 06, 2025
            </div>

            <div className="pt-6">{blog.content}</div>
          </div>
          <div className="col-span-4 ">
            <div className="text-slate-500 font-bold">Author</div>
            <div className="flex items-center pt-2 gap-2 w-full">
              <div>
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="inline-block text-2xl font-bold">
                  {blog.author.name}
                </div>
                <div className="text-slate-500">
                  This is the current author of the article with exceptional
                  knowledge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
