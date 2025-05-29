export function Input({
  label,
  required,
  name,
  placeholder = "",
  type = "text",
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`bg-gray-100 border border-gray-300 text-sm text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
        required={required}
        {...props}
      />
    </div>
  );
}
