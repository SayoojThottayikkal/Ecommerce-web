import { useEffect, useState } from "react";

const parseDuration = (input) => {
  const [amountStr = "0", unitRaw = "seconds"] = (input || "")
    .trim()
    .split(" ");
  const amount = parseInt(amountStr, 10) || 0;
  const unit = unitRaw.toLowerCase();

  if (unit.includes("day")) return amount * 24 * 60 * 60 * 1000;
  if (unit.includes("hour")) return amount * 60 * 60 * 1000;
  if (unit.includes("minute")) return amount * 60 * 1000;
  if (unit.includes("second")) return amount * 1000;
  return 0;
};

const getTimeParts = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export default function CountdownTimer({ timeLeftString = "0 seconds" }) {
  const [remainingMs, setRemainingMs] = useState(() =>
    parseDuration(timeLeftString)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingMs((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeftString]);

  const { days, hours, minutes, seconds } = getTimeParts(remainingMs);

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ].filter(({ value, label }) => value > 0 || label === "Seconds");

  const renderBlock = (label, value) => (
    <div className="text-center" key={label}>
      <span className="text-xs text-gray-600 font-medium">{label}</span>
      <div className="text-xl md:text-2xl font-bold text-black">
        {String(value).padStart(2, "0")}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      {units.map((unit, idx) => (
        <div key={unit.label} className="flex items-center gap-1">
          {renderBlock(unit.label, unit.value)}
          {idx < units.length - 1 && (
            <span className="text-red-500 font-bold text-lg">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
