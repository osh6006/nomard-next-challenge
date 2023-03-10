import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import useMutation from "../lib/client/useMutation";

type FormData = {
  email: string;
  password: string;
};

interface MutationResult {
  ok: boolean;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    login(data);
  };
  const [login, { loading, data, error }] = useMutation("/api/users/login");

  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div className="mt-10 flex-1 w-full flex flex-col items-center">
      <h1 className="font-bold text-3xl">LOGIN</h1>
      <form
        className="mt-10 w-4/5 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          autoComplete="off"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold"
        >
          GO
        </button>
      </form>
      <div className="flex mt-5 items-center justify-between w-4/5">
        <div>Don't you have an account?</div>
        <div className="text-sky-500 underline cursor-pointer">
          <Link href="/create-account">Create an account here!</Link>
        </div>
      </div>
    </div>
  );
}
