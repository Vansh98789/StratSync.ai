import React from "react";

export default function TestimonialCard({ name, quote }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left">
      <p className="text-gray-700 italic mb-4">“{quote}”</p>
      <p className="font-semibold text-teal-700">— {name}</p>
    </div>
  );
}
