export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    " text-white font-medium py-2 px-6 rounded transition-colors duration-200";
  const styles = {
    mainbutton: "bg-button",
    greenbutton: "bg-button1",
    blackbutton: "text-black hover:underline",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
