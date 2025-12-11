"use client";

import React from "react";
import Draggable from "react-draggable";
import { getRandomIntInclusive } from "./helpers";
import { Button } from "@/components/ui/button";
import { FaAnglesDown } from "react-icons/fa6";

export function ContactMeMdBlock({ onClose }: any) {
  const nodeRef = React.useRef(null);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
      {/* Make ONLY the header draggable */}
      <Draggable nodeRef={nodeRef} handle=".window-header" bounds="parent" defaultPosition={{ x: getRandomIntInclusive(225, 300), y: getRandomIntInclusive(225, 300) }}>
        <div ref={nodeRef} className="pointer-events-auto w-[800px]">
          {/* HEADER */}
          <div className="window-header flex items-center justify-between rounded-t-lg font-mono [background-color:var(--bg-gray)] dark:border-x-2 dark:border-t-2 dark:border-white text-white dark:[background-color:var(--background)] text-xl px-6 py-3 select-none">
            <div>contact</div>
            <button onClick={onClose} className="font-mono text-white duration-100 hover:scale-110 active:scale-90">
              [ x ]
            </button>
          </div>

          {/* BODY — NOT DRAGGABLE but moves with parent */}
          <div className="flex flex-col items-start bg-white dark:[background-color:var(--bg-secondary-dark)] border-2 border-gray-light dark:border-white rounded-b-xl shadow-flat w-[800px] h-(--window-height)"></div>
        </div>
      </Draggable>
    </div>
  );
}

export function ContactMeMdHidden() {
  return (
    <div className="modal-box p-0 h-[90vh] [background-color:var(--background)]">
      <div className="rounded-t-lg [background-color:var(--bg-gray)] text-white dark:bg-white dark:text-black w-full font-mono text-lg font-bold p-4 sticky top-0 z-10 flex items-center justify-between">
        contact
        <form method="dialog">
          <Button variant="ghost" className="bg-transparent flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90">
            <FaAnglesDown />
          </Button>
        </form>
      </div>
      <div className="overflow-y">
      </div>
    </div>
  );
}
