import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const { loading, blogs } = useBlogs();
  console.log(blogs);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-col">
          {loading ? (
            <>
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            blogs.blogs.map((blog) => (
              <BlogCard
                id={blog.id}
                key={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate="A random date"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
