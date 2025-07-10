import React from "react";

export default function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-teal-800 mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
