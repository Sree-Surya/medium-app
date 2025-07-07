import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export default function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4 items-center">
      <Link to="/blogs">
        <div className="flex items-center border-2 rounded-sm p-1">
          {/* <Avatar name="m" size="big" /> */}
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
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
          <div className="text-xl font-extrabold ">Medium</div>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <Link to="/new-blogpost">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            New Blogpost
          </button>
        </Link>
        <Link className="flex items-center" to="/profile">
          <Avatar navbar={true} size="big" name="Sreesurya S" />
        </Link>
      </div>
    </div>
  );
}
