import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  tweet: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };
  return (
    <div className="mt-10 flex-1 w-full">
      {/* fetch tweets from db */}

      {/* add tweets */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-center"
      >
        <div className="relative w-4/5 sm:w-3/5">
          <input
            {...register("tweet", { required: true })}
            type="text"
            id="search-dropdown"
            placeholder="Write your mind"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 px-2.5 py-[12px] text-xl font-medium text-white bg-sky-400 rounded-r-lg transition-colors hover:bg-sky-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
