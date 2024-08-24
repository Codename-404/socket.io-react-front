import React from "react";
import Nav from "./comp/Nav";
import RoomSection from "./comp/RoomSection";
import { FaMedium } from "react-icons/fa6";
import { SiGmail, SiUpwork } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-neutral-300 p-8">
      <div
        className="w-full h-20 rounded-xl shadow-md px-4 bg-neutral-200
      shadow-neutral-500 flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Simple chat App</h1>
        <div className="w-fit h-fit flex gap-2">
          <a
            href="https://medium.com/@nayeemurrahman"
            target="_blank"
            className="w-fit flex items-center bg-black 
          text-white font-bold text-base
          px-2 pt-2 pb-1.5 rounded-md shadow-sm shadow-black"
          >
            <FaMedium className="text-xl" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/nayeemurrahman"
            target="_blank"
            style={{
              backgroundColor: "#4fab4a",
            }}
            className="w-fit flex items-center 
           font-bold text-base
          px-2 pt-2 pb-1.5 rounded-md shadow-sm shadow-black"
          >
            <SiUpwork className="text-xl text-white" />
          </a>
          <a
            href="mailto:nayeem.nayeem712@gmail.com"
            target="_blank"
            style={{
              color: "#c71610",
            }}
            className="w-fit flex items-center 
           font-bold text-base bg-white
          px-2 pt-2 pb-1.5 rounded-md shadow-sm shadow-black"
          >
            <SiGmail className="text-xl " />
          </a>
        </div>
      </div>

      <div className="w-full app-body flex gap-4">
        <Nav />
        <RoomSection />
      </div>
    </div>
  );
}
