"use client";

import { LightWave, DarkWave } from "./ui/background/wave";
import ThemeToggle from "./ui/nav/theme-toggle";
import {
  AboutMeButton,
  LinksButton,
  WorkButton,
  ContactMeButton,
} from "./ui/body/buttons";
import { useState, useEffect, useRef } from "react";
import { AboutMeMdBlock, AboutMeMdHidden } from "./ui/body/about-me";
import { LinksMdBlock, LinksMdHidden } from "./ui/body/links";
import { WorkMdBlock, WorkMdHidden } from "./ui/body/work";
import { ContactMeMdBlock, ContactMeMdHidden } from "./ui/body/contact-me";

export default function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const aboutDialogRef = useRef<HTMLDialogElement>(null);
  const linksDialogRef = useRef<HTMLDialogElement>(null);
  const workDialogRef = useRef<HTMLDialogElement>(null);
  const contactDialogRef = useRef<HTMLDialogElement>(null);

  const toggleAboutMeVisibility = () => {
    setShowAboutMe(!showAboutMe);
  };

  const toggleAboutMeModal = () => {
    const dialog = document.getElementById("modal_about") as HTMLDialogElement;
    if (dialog) dialog.show();
    setShowAboutMe(true);
  };

  const toggleLinksVisibility = () => {
    setShowLinks(!showLinks);
  };

  const toggleLinksModal = () => {
    const dialog = document.getElementById("modal_links") as HTMLDialogElement;
    if (dialog) dialog.show();
    setShowLinks(true);
  };

  const toggleWorkVisibility = () => {
    setShowWork(!showWork);
  };

  const toggleWorkModal = () => {
    const dialog = document.getElementById("modal_work") as HTMLDialogElement;
    if (dialog) dialog.show();
    setShowWork(true);
  };

  const toggleContactMeVisibility = () => {
    setShowContactMe(!showContactMe);
  };

  const toggleContactMeModal = () => {
    const dialog = document.getElementById(
      "modal_contact"
    ) as HTMLDialogElement;
    if (dialog) dialog.show();
    setShowContactMe(true);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        aboutDialogRef.current?.close();
        linksDialogRef.current?.close();
        workDialogRef.current?.close();
        contactDialogRef.current?.close();

        setShowAboutMe(false);
        setShowLinks(false);
        setShowWork(false);
        setShowContactMe(false);
      }
    };

    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {/* nav */}
      <nav className="p-3">
        <ThemeToggle></ThemeToggle>
      </nav>
      {/* when the screen is small */}
      <div className="block md:hidden">
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none flex flex-col items-center">
          <h1 className="text-(length:--title-size) text-center mt-[20vh]">
            hi!&nbsp;
            <span className="text-primary">i'm jonathan</span>
          </h1>
          <h3 className="text-center text-(length:--subtitle-size) mb-5">
            front-end, back-end, and cybersecurity
          </h3>
          <div className="flex justify-center max-w-[20rem] pointer-events-auto">
            <div className="no-underline">
              <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-2 mt-4 mb-0 rounded-lg bg-light dark:bg-lighter">
                <AboutMeButton onClick={toggleAboutMeModal}></AboutMeButton>
              </div>
            </div>
            <dialog
              ref={aboutDialogRef}
              id="modal_about"
              className="modal modal-bottom z-10"
              onClose={() => setShowAboutMe(false)}
            >
              {showAboutMe && <AboutMeMdHidden></AboutMeMdHidden>}
            </dialog>
            <div className="no-underline">
              <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-2 mt-4 mb-0 rounded-lg bg-light dark:bg-lighter">
                <LinksButton onClick={toggleLinksModal}></LinksButton>
              </div>
            </div>
            <dialog
              ref={linksDialogRef}
              id="modal_links"
              className="modal modal-bottom z-10"
              onClose={() => setShowLinks(false)}
            >
              {showLinks && <LinksMdHidden></LinksMdHidden>}
            </dialog>
            <div className="no-underline">
              <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-2 mt-4 mb-0 rounded-lg bg-light dark:bg-lighter">
                <WorkButton onClick={toggleWorkModal}></WorkButton>
              </div>
            </div>
            <dialog
              ref={workDialogRef}
              id="modal_work"
              className="modal modal-bottom z-10"
              onClose={() => setShowWork(false)}
            >
              {showWork && <WorkMdHidden></WorkMdHidden>}
            </dialog>
            <div className="no-underline">
              <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-2 mt-4 mb-0 rounded-lg bg-light dark:bg-lighter">
                <ContactMeButton
                  onClick={toggleContactMeModal}
                ></ContactMeButton>
              </div>
            </div>
            <dialog
              ref={contactDialogRef}
              id="modal_contact"
              className="modal modal-bottom z-10"
              onClose={() => setShowContactMe(false)}
            >
              {showContactMe && <ContactMeMdHidden></ContactMeMdHidden>}
            </dialog>
          </div>
        </div>
      </div>
      {/* when the screen is md / large */}
      <div className="hidden md:block">
        <div className="fixed flex mx-auto w-screen h-screen items-center justify-center z-0">
          <div className="pointer-events-auto group/window">
            <div className="absolute flex flex-col transform-(--translate)">
              <div className="rounded-t-lg font-mono flex [background-color:var(--bg-gray)] dark:border-x-2 dark:border-t-2 text-white dark:[background-color:var(--background)] dark:border-white text-xl top-0 left-0 px-6 py-3">
                <div className="flex grow flex-row justify-between">&nbsp;</div>
              </div>
              <div className="justify-center items-center flex flex-col bg-white dark:[background-color:var(--bg-secondary-dark)] border-2 border-gray-light dark:border-white rounded-b-xl m-0 shadow-flat w-(--window-width) h-(--window-height)">
                <p className="text-center font-medium font-body text-(length:--title-size) pt-(--title-padding)">
                  hi!&nbsp;
                  <span className="text-primary font-bold">i'm jonathan</span>
                </p>
                <h2 className="text-center">
                  front-end, back-end, and cybersecurity
                </h2>
                <div className="flex flex-wrap flex-row justify-center m-(--icon-container-margin) min-w-xs">
                  <div className="m-4">
                    <AboutMeButton
                      onClick={toggleAboutMeVisibility}
                    ></AboutMeButton>
                  </div>
                  <div className="m-4">
                    <LinksButton onClick={toggleLinksVisibility}></LinksButton>
                  </div>
                  <div className="m-4">
                    <WorkButton onClick={toggleWorkVisibility}></WorkButton>
                  </div>
                  <div className="m-4">
                    <ContactMeButton
                      onClick={toggleContactMeVisibility}
                    ></ContactMeButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed flex items-center justify-center pointer-events-none top-0 left-0 w-screen h-screen z-1">
          {showAboutMe && (
            <AboutMeMdBlock
              onClose={() => setShowAboutMe(false)}
            ></AboutMeMdBlock>
          )}
          {showLinks && (
            <LinksMdBlock onClose={() => setShowLinks(false)}></LinksMdBlock>
          )}
          {showWork && (
            <WorkMdBlock onClose={() => setShowWork(false)}></WorkMdBlock>
          )}
          {showContactMe && (
            <ContactMeMdBlock
              onClose={() => setShowContactMe(false)}
            ></ContactMeMdBlock>
          )}
        </div>
      </div>

      {/* background */}
      <div className="bg">
        <div>
          <LightWave />
          <DarkWave />
        </div>
      </div>
    </>
  );
}
