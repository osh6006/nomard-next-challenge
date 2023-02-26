import { useForm, SubmitHandler } from "react-hook-form";

interface Register {
  email: String;
  password: String;
  passwordConfirm: String;
}

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Register>();
  const onSubmit: SubmitHandler<Register> = data => console.log(data);

  return (
    <div className="mt-10 flex-1 w-full flex flex-col items-center">
      <h1 className="font-bold text-3xl">CREATE ACCOUNT</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 w-4/5 flex flex-col gap-4"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "This field is required" },
          })}
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "This field is required" },
          })}
        />
        {errors.password && (
          <p className="text-red-400">{errors.password.message}</p>
        )}

        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: { value: true, message: "This field is required" },
            validate: {
              passwordConfirm: value => {
                if (value !== watch("password"))
                  return "Your passwords do no match";
              },
            },
          })}
        />
        {errors.passwordConfirm && (
          <p className="text-red-400">{errors.passwordConfirm.message}</p>
        )}

        <button
          type="submit"
          className="bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
