import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };
  return (
    <div className="mt-10 flex justify-center ">
      <form className="flex gap-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className="rounded-lg px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name.."
        />
        <input
          {...register("email")}
          className="rounded-lg px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-lg px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="rounded-md px-5 text-white font-semibold py-1 bg-blue-500"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Form;
