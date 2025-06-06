export default function CountdownTimer({ timeLeft }) {
  const { days, hours, minutes, seconds } = timeLeft;

  const renderBlock = (label, value) => (
    <div className="text-center">
      <span className="text-xs text-gray-600 font-medium">{label}</span>
      <div className="text-xl md:text-2xl font-bold text-black">
        {String(value).padStart(2, "0")}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      {renderBlock("Days", days)}
      <span className="text-red-500 font-bold text-lg">:</span>
      {renderBlock("Hours", hours)}
      <span className="text-red-500 font-bold text-lg">:</span>
      {renderBlock("Minutes", minutes)}
      <span className="text-red-500 font-bold text-lg">:</span>
      {renderBlock("Seconds", seconds)}
    </div>
  );
}
