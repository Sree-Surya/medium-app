import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { SignupInput } from "@sreesurya_s/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    setClick(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        { ...postInputs }
      );
      const jwt = response.data;
      localStorage.setItem("token", "Bearer " + jwt.jwt);
      setClick(false);
      navigate("/blogs");
    } catch (e) {
      setClick(false);
      //alert the user
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>;
      console.log(e);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center ">
      <div className="flex justify-center ">
        <div className="min-w-[60%] ">
          <div className="px-10  text-3xl text-center font-extrabold">
            {type === "signup" ? "Create an account" : "Login"}
          </div>
          <div className="text-slate-500 text-center">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
            <Link
              className="pl-2 underline"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>{" "}
          </div>
          <div className="pt-5">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs({ ...postInputs, name: e.target.value });
                }}
              />
            ) : (
              <></>
            )}

            <LabelledInput
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => {
                setPostInputs({ ...postInputs, email: e.target.value });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
            />
          </div>
          <button
            disabled={click}
            onClick={sendRequest}
            type="button"
            className="text-white mt-4 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type = "text",
}: labelledInputType) {
  return (
    <div>
      <label className="block pt-2 mb-2 text-sm font-semibold text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
