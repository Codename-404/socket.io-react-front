import { atom } from "jotai";
import { io } from "socket.io-client";
import { v4 } from "uuid";
import { connectionStates } from "./data";

export const myRoomId = atom(v4());

export const connectionStateAtom = atom(connectionStates.NOT_CONNECTED);
export const socketAtom = atom(null);
export const lastMessageAtom = atom(null);
export const socketInitAtom = atom(
  (get) => get(connectionStateAtom),
  (get, set, url) => {
    set(connectionStateAtom, connectionStates.CONNECTING);

    const socket = io(url);

    set(socketAtom, socket);

    socket.on("connect", () => {
      set(connectionStateAtom, connectionStates.CONNECTED);
      console.log("Connected to server:", socket.id);
    });

    socket.on("disconnect", () => {
      set(connectionStateAtom, connectionStates.DISCONNECTED);
      console.log("Disconnected from server");
    });

    socket.on("connect_error", (error) => {
      set(connectionStateAtom, connectionStates.ERROR);
      console.error("Connection error:", error);
    });
  }
);
