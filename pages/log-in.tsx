import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };
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
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold"
        >
          GO
        </button>
      </form>
    </div>
  );
}
