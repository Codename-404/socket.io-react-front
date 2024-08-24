import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { useAtom, useAtomValue } from "jotai";
import { lastMessageAtom, myRoomId, socketAtom } from "../stores/globalStores";
import { messageKeys } from "../stores/data";

export default function ChatList() {
  const allMsg = useRef([]);
  const myRoomIdValue = useAtomValue(myRoomId);
  const socket = useAtomValue(socketAtom);
  const [lastMessage, setLastMessage] = useAtom(lastMessageAtom);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (data) => {
      setLastMessage((prevMessage) => {
        if (prevMessage) {
          allMsg.current = [...allMsg.current, prevMessage];
        }
        return data;
      });
    };
    socket.on("message", handleMessage);
  }, [socket]);

  return (
    <div className="chat-list-container pl-4 pt-4 overflow-y-scroll scroll-1">
      <ul className="w-full h-fit flex flex-col gap-2">
        {allMsg.current.map(({ id, ownerId, message }, i) => (
          <Message
            key={id}
            message={message}
            isOwner={ownerId === myRoomIdValue}
          />
        ))}
        {lastMessage && (
          <Message
            key={lastMessage.id}
            message={lastMessage[messageKeys.message]}
            isOwner={lastMessage[messageKeys.ownerId] === myRoomIdValue}
          />
        )}
      </ul>
    </div>
  );
}
