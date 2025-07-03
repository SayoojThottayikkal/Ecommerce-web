import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({ name, label, type = "text", required, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-3">
      <h3 className="text-gray-500">{name}</h3>
      <input
        {...register(name, { required })}
        type={type}
        placeholder={""}
        className={`w-full border border-gray-300 rounded-sm px-3 py-2 text-sm text-black  bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-400 ${
          errors[name] ? "border-red-500" : ""
        }`}
        {...rest}
      />
      {errors[name] && (
        <p className="text-xs text-red-500 mt-1">{label} is required</p>
      )}
    </div>
  );
};

export default FormInput;
