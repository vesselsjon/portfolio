"use client";

import { Button } from "@/components/ui/button";
import { IoIosInformationCircle, IoIosLink } from "react-icons/io";
import { GiFullFolder } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useState } from "react";

export function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
        onClick={toggleVisibility}
      >
        <IoIosInformationCircle style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        about
      </div>
    </div>
  );
}

export function Links() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
      >
        <IoIosLink style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        links
      </div>
    </div>
  );
}

export function Work() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
      >
        <GiFullFolder style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        work
      </div>
    </div>
  );
}

export function ContactMe() {
  return (
    <div className="flex flex-col items-center">
      <Button
        variant="ghost"
        className="bg-transparent w-16 h-16 flex items-center justify-center p-0 rounded-2xl hover:scale-105 active:scale-90"
      >
        <MdOutlineAttachEmail style={{ width: 48, height: 48 }} />
      </Button>

      <div className="font-mono font-bold text-lg text-center text-gray mt-2">
        contact
      </div>
    </div>
  );
}
