import { useForm, SubmitHandler } from "react-hook-form";

type formField = {
  email: string;
  password: string;
};

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm<formField>();

  const onSubmit: SubmitHandler<formField> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="gap-2 flex flex-col justify-center items-center m-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className=""
        {...register("email")}
        type="text"
        placeholder="Email"
      />
      <input
        className=""
        {...register("password")}
        type="password"
        placeholder="password"
      />
      <button className="p-2 border-2 rounded-lg" type="submit">
        Submit
      </button>
    </form>
  );
}
