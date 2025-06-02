import React from "react";

export default function SectionHeader({ icon, label, heading }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        {icon || <div className="w-2 h-4 bg-red-500 rounded-sm" />}

        <span className="text-red-500 text-sm font-semibold">{label}</span>
      </div>
      <h1 className="text-2xl font-semibold">{heading}</h1>
    </div>
  );
}
