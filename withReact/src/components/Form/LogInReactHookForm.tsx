import { useForm, SubmitHandler } from "react-hook-form";

type formFields = {
  email: string;
  password: string;
};

export default function LogInReactHookForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      email: "react@example.com",
    },
  });

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Email has already been registered",
      });
    }
  };

  return (
    <form
      className="gap-2 flex flex-col justify-center items-center m-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className=""
        {...register("email", {
          required: "email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        className="m-2"
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 6,
            message: "password must be at least 6 characters",
          },
        })}
        type="password"
        placeholder="password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button
        disabled={isSubmitting}
        className="p-2 border-2 rounded-lg m-2"
        type="submit"
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {/* if the error is not specific to any field instead of form as a whole,
      like email already registered, so that we root is used */}
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  );
}
