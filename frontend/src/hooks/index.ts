import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export type Blog = {
  content: string;
  title: string;
  id: string;
  author: {
    name?: string;
  };
};

type BlogsResponse = {
  blogs: Blog[];
};

export const useBlog = ({
  id,
}: {
  id: string;
}): { loading: boolean; blog: Blog } => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>({
    content: "",
    title: "",
    id: "",
    author: { name: "" },
  });
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogsResponse>({ blogs: [] });
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      });
  }, []);

  return { loading, blogs: blogs };
};
