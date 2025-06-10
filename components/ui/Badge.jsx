export function Badge({ text = "", color = "bg-button1", className = "" }) {
  return (
    <span
      className={`text-white text-xs font-semibold px-3 py-1 rounded-md inline-block ${color} ${className}`}
    >
      {text}
    </span>
  );
}
