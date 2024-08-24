import React from "react";

export default function TextInput({ label, onChange, placeholder }) {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="font-bold text-xl">{label}</div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        className="w-full h-12 flex justify-center items-start px-4 py-2 
        rounded-md shadow-inner shadow-neutral-400"
      />
    </div>
  );
}
