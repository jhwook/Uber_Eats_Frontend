import React from "react";

export const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="w-full max-w-lg rounded-lg bg-white py-10 text-center">
        <h3 className="text-2xl text-gray-800">Log In</h3>
        <form className="mt-5 flex flex-col px-5">
          <input
            placeholder="Email"
            className=" mb-3 rounded-lg   border-2 bg-gray-100 py-3 px-5 shadow-inner focus:border-green-600 focus:border-opacity-60 focus:outline-none"
          />
          <input
            placeholder="Password"
            className=" rounded-lg border-2 bg-gray-100 py-3 px-5 shadow-inner  focus:border-green-600 focus:border-opacity-60 focus:outline-none"
          />
          <button className="mt-3 rounded-lg bg-gray-800 py-3 px-5 text-lg text-white hover:opacity-90 focus:outline-none">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
