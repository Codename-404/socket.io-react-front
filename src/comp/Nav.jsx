import React, { useMemo, useRef } from "react";
import TextInput from "./TextInput";
import { useAtom, useAtomValue } from "jotai";
import { connectionStateAtom, socketInitAtom } from "../stores/globalStores";
import { connectionStates } from "../stores/data";

export default function Nav() {
  const serverUrl = useRef("");
  const connectionState = useAtomValue(connectionStateAtom);

  const [, initializeSocket] = useAtom(socketInitAtom);

  const connectToServer = () => {
    if (!serverUrl.current) {
      window.alert("Please enter the server url");
      return;
    }
    initializeSocket(serverUrl.current || "http://localhost:3000");
  };

  const connectionColor = useMemo(() => {
    switch (connectionState) {
      case connectionStates.CONNECTED: {
        return "green";
      }
      case connectionStates.CONNECTING: {
        return "yellow";
      }
      case connectionStates.DISCONNECTED: {
        return "orange";
      }
      case connectionStates.ERROR: {
        return "red";
      }

      case connectionStates.NOT_CONNECTED: {
        return "black";
      }

      default: {
        return "black";
      }
    }
  }, [connectionState]);

  return (
    <div
      className="w-80 h-full bg-neutral-200 rounded-xl 
    shadow-md shadow-neutral-500 p-2 flex flex-col gap-10"
    >
      <div className="w-full h-fit flex flex-col gap-4 p-4 rounded-xl bg-neutral-100 shadow-sm shadow-neutral-500">
        <TextInput
          label={
            <div className="w-full h-fit flex justify-between">
              <h2>Server URL</h2>
              <div className="w-fit flex gap-1 items-center">
                <p className="text-sm">{connectionState}</p>
                <p
                  style={{
                    backgroundColor: connectionColor,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                  }}
                ></p>
              </div>
            </div>
          }
          onChange={(value) => (serverUrl.current = value)}
        />
        <button
          onClick={() => {
            connectToServer();
          }}
          className="w-full h-12 flex justify-center items-center text-xl font-bold rounded-md shadow-sm shadow-black bg-yellow-400"
        >
          Connect
        </button>
      </div>
    </div>
  );
}
