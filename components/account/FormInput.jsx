import { useFormContext } from "react-hook-form";

export default function FormInput({
  name,
  label,
  type = "text",
  readOnly = false,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1 ">{label}</label>
      <input
        {...register(name)}
        type={type}
        readOnly={readOnly}
        placeholder={label}
        className={`w-full px-4 py-2 border text-gray-500 ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-md bg-gray-100 focus:outline-none`}
      />
      {errors[name] && (
        <p className="text-xs text-red-500 mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
}
