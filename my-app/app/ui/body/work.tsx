"use client";

import React from "react";
import Draggable from "react-draggable";
import { getRandomIntInclusive } from "./helpers";
import { Button } from "@/components/ui/button";
import { FaAnglesDown } from "react-icons/fa6";
import Image from "next/image";

export function WorkMdBlock({ onClose }: any) {
  const nodeRef = React.useRef(null);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
      {/* Make ONLY the header draggable */}
      <Draggable
        nodeRef={nodeRef}
        handle=".window-header"
        bounds="parent"
        defaultPosition={{
          x: getRandomIntInclusive(225, 300),
          y: getRandomIntInclusive(225, 300),
        }}
      >
        <div ref={nodeRef} className="pointer-events-auto w-(--work-width)">
          {/* HEADER */}
          <div className="window-header flex items-center justify-between rounded-t-lg font-mono [background-color:var(--bg-gray)] dark:border-x-2 dark:border-t-2 dark:border-white text-white dark:[background-color:var(--background)] text-xl px-6 py-3 select-none">
            <div>work</div>
            <button
              onClick={onClose}
              className="font-mono text-white duration-100 hover:scale-110 active:scale-90"
            >
              [ x ]
            </button>
          </div>

          {/* BODY — NOT DRAGGABLE but moves with parent */}
          <div className="flex flex-col items-start bg-white dark:[background-color:var(--bg-secondary-dark)] border-2 border-gray-light dark:border-white rounded-b-xl shadow-flat w-(--work-width) h-(--window-height)">
            <div className="pt-6 p-4 md:p-2 md:p-10 overflow-auto w-full h-full overflow-x-hidden">
              <div className="md:columns-2 pt-2 pb-5">
                <div className="md:break-after-column">
                  <div className="font-mono font-semibold text-xl md:text-2xl">
                    TOOLS
                  </div>
                  <div className="flex flex-wrap mb-5 md:mb-0">
                    {[
                      "Visual Studio Code",
                      "Visual Studio 2022",
                      "SQL Server",
                      "Git",
                      "Vercel",
                      "AWS",
                    ].map((tool) => (
                      <div
                        key={tool}
                        className="m-1 px-2 py-2 whitespace-nowrap text-base bg-white dark:[background-color:var(--background)] border-1 border-gray-lightest rounded-md drop-shadow-tag duration-100 hover:translate-y-[2px]"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-mono font-semibold text-xl md:text-2xl">
                    DEVELOPMENT
                  </div>
                  <div className="flex flex-wrap">
                    {[
                      "C#",
                      "C++",
                      "Python",
                      "TypeScript",
                      "HTML/CSS",
                      "SQL",
                      "React",
                      "Angular",
                      "Next.js",
                      "Flask",
                      "Django",
                      ".NET",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="m-1 px-2 py-2 whitespace-nowrap text-base bg-white dark:[background-color:var(--background)] border-1 border-gray-lightest rounded-md drop-shadow-tag duration-100 hover:translate-y-[2px]"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr className="h-px [background-color:var(--bg-gray)] dark:bg-white opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
              <div className="mt-6 mb-10 md:mb-0">
                <div className="font-mono font-semibold text-xl md:text-2xl">
                  PROJECTS
                </div>
                <div>
                  <div className="flex flex-col items-center md:items-start md:flex-row">
                    {/* IMAGE */}
                    <div className="w-[300px] h-[250px] py-2 md:py-5 md:pr-7 shrink-0">
                      <Image
                        src="/SOAR_EDR.webp"
                        width={512}
                        height={512}
                        alt="SOAR-EDR process"
                      />
                    </div>
                    {/* BODY */}
                    <div className="py-5 flex flex-col items-center w-full">
                      <h3 className="text-primary font-bold text-2xl md:text-(length:--subtitle-size) mb-1 w-full">
                        SOAR-EDR
                      </h3>
                      <p className="pt-2 pb-4 text-base md:text-(length:--body-size)">
                        SOAR-EDR is a hands-on security automation project
                        focused on simulating and detecting real-world cyber
                        attacks in a controlled environment. <br />
                        <br />
                        An attack using LaZagne triggers automated detection
                        rules in LimaCharlie, which forward alerts to Tines for
                        orchestration. <br />
                        <br />
                        Notifications are sent to Slack and email, allowing a
                        user to respond by isolating the affected endpoint or
                        investigating further. <br />
                        <br />
                        The project emphasizes detection engineering, automated
                        response, and defensive workflows.
                      </p>
                    </div>
                  </div>
                  <hr className="h-px [background-color:var(--bg-gray)] dark:bg-white opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
                </div>
                <div>
                  <div className="flex flex-col items-center md:items-start md:flex-row">
                    {/* IMAGE */}
                    <div className="w-[300px] h-[250px] py-2 md:py-5 md:pr-7 shrink-0">
                      <Image src="/MusicGenreDiscoverer.webp" width={1919} height={908} alt="SOAR-EDR process"/>
                    </div>
                    {/* BODY */}
                    <div className="py-5 flex flex-col items-center w-full">
                      <h3 className="text-primary font-bold text-2xl md:text-(length:--subtitle-size) mb-1 w-full">
                        Music Genre Discoverer
                      </h3>
                      <p className="pt-2 pb-4 text-base md:text-(length:--body-size)">
                        Music Genre Discoverer is a web-based music
                        recommendation system that suggests similar songs using
                        audio feature extraction and machine learning. <br />
                        <br />
                        Users can upload audio files, which are analyzed with
                        Librosa to extract features such as tempo, chroma,
                        MFCCs, and spectral data. <br />
                        <br />
                        Song similarity is calculated using cosine distance, and
                        results are stored and retrieved from Firebase
                        Firestore. <br />
                        <br />
                        The application is built with a Flask backend and an
                        Angular frontend.
                      </p>
                    </div>
                  </div>
                  <hr className="h-px [background-color:var(--bg-gray)] dark:bg-white opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export function WorkMdHidden() {
  return (
    <div className="modal-box p-0 max-h-[64svh] flex flex-col [background-color:var(--background)]">
      <div className="rounded-t-lg [background-color:var(--bg-gray)] text-white dark:bg-white dark:text-black w-full font-mono text-lg font-bold p-4 sticky top-0 z-10 flex items-center justify-between">
        work
        <form method="dialog">
          <Button
            variant="ghost"
            className="bg-transparent flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
          >
            <FaAnglesDown />
          </Button>
        </form>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="pt-6 p-4 md:p-2 md:p-10 overflow-auto w-full h-full overflow-x-hidden">
          <div className="md:columns-2 pt-2 pb-5">
            <div className="md:break-after-column">
              <div className="font-mono font-semibold text-xl md:text-2xl">
                TOOLS
              </div>
              <div className="flex flex-wrap mb-5 md:mb-0">
                {[
                  "Visual Studio Code",
                  "Visual Studio 2022",
                  "SQL Server",
                  "Git",
                  "Vercel",
                  "AWS",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="m-1 px-2 py-2 whitespace-nowrap text-base bg-white dark:[background-color:var(--background)] border-1 border-gray-lightest rounded-md drop-shadow-tag duration-100 hover:translate-y-[2px]"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono font-semibold text-xl md:text-2xl">
                DEVELOPMENT
              </div>
              <div className="flex flex-wrap">
                {[
                  "C#",
                  "C++",
                  "Python",
                  "TypeScript",
                  "HTML/CSS",
                  "SQL",
                  "React",
                  "Angular",
                  "Next.js",
                  "Flask",
                  "Django",
                  ".NET",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="m-1 px-2 py-2 whitespace-nowrap text-base bg-white dark:[background-color:var(--background)] border-1 border-gray-lightest rounded-md drop-shadow-tag duration-100 hover:translate-y-[2px]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="h-px [background-color:var(--bg-gray)] dark:bg-white opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
          <div className="mt-6 mb-10 md:mb-0">
            <div className="font-mono font-semibold text-xl md:text-2xl">
              PROJECTS
            </div>
            <div>
              <div className="flex flex-col items-center md:items-start md:flex-row">
                {/* IMAGE */}
                <div className="w-[300px] h-[250px] py-2 md:py-5 md:pr-7 shrink-0">
                  <Image
                    src="/SOAR_EDR.webp"
                    width={512}
                    height={512}
                    alt="SOAR-EDR process"
                  />
                </div>
                {/* BODY */}
                <div className="py-5 flex flex-col items-center w-full">
                  <h3 className="text-primary font-bold text-2xl md:text-(length:--subtitle-size) mb-1 w-full">
                    SOAR-EDR
                  </h3>
                  <p className="pt-2 pb-4 text-base md:text-(length:--body-size)">
                    SOAR-EDR is a hands-on security automation project focused
                    on simulating and detecting real-world cyber attacks in a
                    controlled environment. <br />
                    <br />
                    An attack using LaZagne triggers automated detection rules
                    in LimaCharlie, which forward alerts to Tines for
                    orchestration. <br />
                    <br />
                    Notifications are sent to Slack and email, allowing a user
                    to respond by isolating the affected endpoint or
                    investigating further. <br />
                    <br />
                    The project emphasizes detection engineering, automated
                    response, and defensive workflows.
                  </p>
                </div>
              </div>
              <hr className="h-px [background-color:var(--bg-gray)] dark:bg-white opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
            </div>
            <div>
                  <div className="flex flex-col items-center md:items-start md:flex-row">
                    {/* IMAGE */}
                    <div className="w-[300px] h-[250px] py-2 md:py-5 md:pr-7 shrink-0">
                      <Image src="/MusicGenreDiscoverer.webp" width={1919} height={908} alt="SOAR-EDR process"/>
                    </div>
                    {/* BODY */}
                    <div className="py-5 flex flex-col items-center w-full">
                      <h3 className="text-primary font-bold text-2xl md:text-(length:--subtitle-size) mb-1 w-full">
                        Music Genre Discoverer
                      </h3>
                      <p className="pt-2 pb-4 text-base md:text-(length:--body-size)">
                        Music Genre Discoverer is a web-based music
                        recommendation system that suggests similar songs using
                        audio feature extraction and machine learning. <br />
                        <br />
                        Users can upload audio files, which are analyzed with
                        Librosa to extract features such as tempo, chroma,
                        MFCCs, and spectral data. <br />
                        <br />
                        Song similarity is calculated using cosine distance, and
                        results are stored and retrieved from Firebase
                        Firestore. <br />
                        <br />
                        The application is built with a Flask backend and an
                        Angular frontend.
                      </p>
                    </div>
                  </div>
                  <hr className="h-px [background-color:var(--bg-gray)] dark:bg-white opacity-20 mt-4 md:mt-2 border-0 w-full"></hr>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
