import React from "react";
import Marquee from 'react-fast-marquee'

export default function Contact() {
  return <div className="w-full my-3 overflow-y-hidden">
    <Marquee>
        <h1 className="text-gray-500 text-6xl font-bold border-y border-gray-500 border-bold ">
            WANNA MAKE SOMETHING COOL, LET'S CONNECT
        </h1>
    </Marquee>
  </div>;
}
