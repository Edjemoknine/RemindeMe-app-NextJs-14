"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Themetoggle } from "./Themetoggle";
import Logo from "../shared/Logo";

const Navbar = () => {
  return (
    <header className="border-b py-4 mb-10 w-full ">
      <div className="max-w-7xl  mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          // className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400"
          href={"/"}
        >
          <Logo size={3}/>
        </Link>
        {/* <Link
          className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400"
          href={"/"}
        >
          RemindeMe
        </Link> */}
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/" />
          <Themetoggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
