import React from "react";
import ChatList from "./ChatList";
import ChatMessageInput from "./ChatMessageInput";

export default function RoomSection() {
  return (
    <div
      className="room-section-container bg-neutral-200 rounded-xl 
    shadow-md shadow-neutral-500 flex flex-col gap-4"
    >
      <ChatList />
      <ChatMessageInput />
    </div>
  );
}
