import React from "react";
import { useForm, SubmitHandler} from "react-hook-form";
import { Link } from "react-router-dom";

// Define form fields type
type FormFields = {
  email: string;
  password: string;
};

export const LogInReactHookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "react@example.com",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      throw new Error(); 
      console.log(data);
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "Email has already been registered",
      });
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <form
          className="gap-2 flex flex-col justify-center items-center m-3 border-2 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.includes("@") ? true : "Email must include @",
            })}
            type="text"
            placeholder="Email"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="Password"
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
          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}
        </form>
        <div className="flex justify-center items-center gap-2">
          Have an account?{" "}
          <span className="hover:underline cursor-pointer hover:font-bold hover:border-2 p-2 rounded-lg">
            <Link to="/reactForm">Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
