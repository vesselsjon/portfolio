"use client";

import { Button } from "@/components/ui/button";
import { IoIosInformationCircle, IoIosLink } from "react-icons/io";
import { GiFullFolder } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export function AboutMeButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void}) {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
        onClick={onClick}
      >
        <IoIosInformationCircle style={{ width: 48, height: 48 }} />
        {children}
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        about
      </div>
    </div>
  );
}

export function LinksButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void}) {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
        onClick={onClick}
      >
        <IoIosLink style={{ width: 48, height: 48 }} />
        {children}
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        links
      </div>
    </div>
  );
}

export function WorkButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void}) {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
        onClick={onClick}
      >
        <GiFullFolder style={{ width: 48, height: 48 }} />
        {children}
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        work
      </div>
    </div>
  );
}

export function ContactMeButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void}) {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
        onClick={onClick}
      >
        <MdOutlineAttachEmail style={{ width: 48, height: 48 }} />
        {children}
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        contact
      </div>
    </div>
  );
}

export function LinkedInButton() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
      >
        <FaLinkedin style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        linkedin
      </div>
    </div>
  );
}

export function GitHubButton() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
      >
        <FaGithub style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        github
      </div>
    </div>
  );
}

export function ResumeButton() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
      >
        <FaFileAlt style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        resume
      </div>
    </div>
  );
}
