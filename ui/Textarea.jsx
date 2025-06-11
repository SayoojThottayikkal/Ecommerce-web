export function Textarea({
  label,
  name,
  required,
  placeholder = "",
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      <label className="block text-sm text-gray-700 font-medium mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={5}
        className={`w-full bg-gray-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        {...props}
      />
    </div>
  );
}
