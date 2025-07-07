import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export default function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center">
          <Avatar name={authorName ? authorName : "Anonymous"} />
          <div className="font-extralight text-sm pl-2">{authorName} : </div>
          <div className="pl-2 font-thin text-sm text-slate-500">
            {publishedDate}
          </div>
        </div>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="mb-2 text-lg text-gray-500">
          {content.slice(0, 100) + "..."}
        </div>
        <div className=" text-slate-500 text-sm font-thin">{`${Math.ceil(
          content.length / 100
        )} minute(s) read.`}</div>
        {/* <div className="bg-slate-200 h-1 w-full"></div> */}
      </div>
    </Link>
  );
}

export function Avatar({
  navbar,
  name,
  size = "small",
}: {
  navbar?: boolean;
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div className={`${navbar ? "flex items-center" : ""}`}>
      <div
        className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-500 rounded-full text-white ${
          size === "small" ? "w-6 h-6" : "w-10 h-10"
        }`}
      >
        {navbar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        ) : (
          <span
            className={`${
              size === "small" ? "text-xs" : "text-md"
            }  text-white `}
          >
            {name[0].toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}
