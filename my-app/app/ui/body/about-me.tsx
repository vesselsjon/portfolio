"use client";

import React from "react";
import Draggable from "react-draggable";
import { getRandomIntInclusive } from "./helpers";

export default function AboutMe({ onClose }: any) {
  const nodeRef = React.useRef(null);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
      {/* Make ONLY the header draggable */}
      <Draggable nodeRef={nodeRef} handle=".window-header" bounds="parent" defaultPosition={{ x: getRandomIntInclusive(225, 300), y: getRandomIntInclusive(225, 300) }}>
        <div ref={nodeRef} className="pointer-events-auto w-[800px]">
          {/* HEADER */}
          <div className="window-header flex items-center justify-between rounded-t-lg font-mono [background-color:var(--bg-gray)] dark:border-x-2 dark:border-t-2 dark:border-white text-white dark:[background-color:var(--background)] text-xl px-6 py-3 select-none">
            <div>about</div>
            <button
              onClick={onClose}
              className="font-mono text-white duration-100 hover:scale-110 active:scale-90"
            >
              [ x ]
            </button>
          </div>

          {/* BODY — NOT DRAGGABLE but moves with parent */}
          <div className="flex flex-col items-start bg-white dark:[background-color:var(--bg-secondary-dark)] border-2 border-gray-light dark:border-white rounded-b-xl shadow-flat w-[800px] h-(--window-height)">
            <div className="pt-6 p-4 flex flex-col items-center md:flex-row md:pl-15 md:p-8">
                <div className="md:pl-9">
                    <div className="text-(length:--name-size)/8 font-bold text-primary mt-4 text-center md:text-left">Jonathan Vessels<br className="block md:hidden"/></div>
                    <div className="text-base md:text-lg text-center md:text-left md:pl-1">US-based software engineer
                        <br/>Former app developer at <a href="https://www.machinify.com/" target="_blank" rel="noopener noreferrer">Machinify</a>
                    </div>
                </div>
            </div>
            <hr className="h-px bg-gray-lightest dark:opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
            <div className="pt-5 pb-10 md:pb-20 px-5 md:px-12 w-full h-full rounded-b-md overflow-y-auto text-base md:text-xl/9">
                <div>
                    <div className="pb-3">hi! i'm jonathan, a recent graduate in computer science and engineering. i...</div>
                    <ul className="mt-2 pl-6 list-disc">
                        <li>am interested in software engineering, and</li>
                        <li>building my skills, particularly in</li>
                        <li>full-stack engineering and cybersecurity!</li>
                    </ul>
                    <div className="py-5">wanna reach out? send me an email at <u>vesselsjonathan@gmail.com</u>!</div>
                </div>
                <span className="font-mono font-semibold text-xl md:text-2xl">EDUCATION</span>
                <br />
                <div className="my-2 border-l-4 pl-3 border-gray-lightest">
                    <p className="md:pt-3 text-base md:text-xl/4">Bachelor of Science in Computer Science and Engineering</p>
                    <span className="text-sm/6 text-gray-light">(GRADUATED UofL 2024)</span>
                    <p className="md:pt-3 text-base md:text-xl/4">Master of Engineering in Computer Science and Engineering</p>
                    <span className="text-sm/6 text-gray-light">(GRADUATED UofL 2025)</span>
                </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
