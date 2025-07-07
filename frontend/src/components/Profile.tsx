import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
          type="button"
          className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
