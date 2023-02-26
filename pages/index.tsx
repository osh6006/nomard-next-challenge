import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWR from "swr";
import useMutation from "../lib/client/useMutation";
import useUser from "../lib/client/useUser";

type FormData = {
  tweet: string;
};

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    tweet(data);
  };
  const [tweet, { data }] = useMutation("/api/tweets");
  const { data: tweetData, mutate } = useSWR("/api/tweets");
  const { user, isLoading } = useUser();
  const router = useRouter();

  console.log(user, isLoading);

  useEffect(() => {
    if (data?.ok) {
      console.log("success");
      mutate();
      reset();
    }
  }, [data]);
  return (
    <div className="mt-10 flex-1 w-full">
      {/* fetch tweets from db */}
      <h1 className="text-2xl font-bold uppercase text-center">Tweets</h1>
      <div className="flex flex-col gap-5 w-full items-center overflow-y-auto py-10 max-h-[400px]">
        {tweetData &&
          tweetData.products?.map((el: any) => (
            <div
              className="w-4/5 sm:w-3/5  border-sky-500 rounded-lg py-4 px-2 border-2 hover:scale-105 transition-all cursor-pointer "
              key={el.id}
              onClick={() => {
                router.push(`/tweet/${el.id}`);
              }}
            >
              {el.content}
            </div>
          ))}
      </div>

      {/* add tweets */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 w-full flex justify-center"
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
