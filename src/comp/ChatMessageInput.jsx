import React, { useRef } from "react";
import TextInput from "./TextInput";
import { useAtom, useAtomValue } from "jotai";
import {
  connectionStateAtom,
  myRoomId,
  socketAtom,
} from "../stores/globalStores";
import { v4 } from "uuid";
import { connectionStates } from "../stores/data";

export default function ChatMessageInput() {
  const [socket] = useAtom(socketAtom);
  const connectionState = useAtomValue(connectionStateAtom);
  const myRoomIdVal = useAtomValue(myRoomId);
  const msgInput = useRef("");

  const sendMessage = () => {
    if (socket && connectionState === connectionStates.CONNECTED) {
      socket.emit("message", {
        id: v4(),
        ownerId: myRoomIdVal,
        message: msgInput.current,
      });
    } else {
      alert("Please connect to server first");
    }
  };

  return (
    <div className="w-full h-20 flex gap-2 p-4">
      <div className="grow h-full">
        <TextInput
          onChange={(value) => {
            msgInput.current = value;
          }}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="w-fit px-4 py-2 h-full flex justify-center items-center text-xl 
      font-bold rounded-md shadow-sm shadow-black bg-black text-white"
      >
        Send
      </button>
    </div>
  );
}
