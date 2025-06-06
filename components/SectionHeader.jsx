import React from "react";

export default function SectionHeader({ icon, label, heading, option }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        {icon || <div className="w-2 h-4 bg-red-500 rounded-sm" />}

        <span className="text-red-500 text-sm font-semibold">{label}</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-start gap-3">
        <h1 className="text-2xl font-bold text-black">{heading}</h1>
        <h1 className="text-2xl font-bold text-black">{option}</h1>
      </div>
    </div>
  );
}
