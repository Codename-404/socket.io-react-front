import React from "react";

export default function Message({ message, isOwner }) {
  return (
    <li
      className={`w-full h-fit flex ${
        isOwner ? "justify-end" : "justify-start"
      }`}
    >
      <p
        className={`w-fit h-fit rounded-md 
    shadow-sm shadow-neutral-600 p-2 ${
      isOwner ? "bg-neutral-100 text-black" : "bg-neutral-700 text-white"
    }`}
      >
        {message}
      </p>
    </li>
  );
}
