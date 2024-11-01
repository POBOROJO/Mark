"use client";

import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/40 sticky top-0 border-b backdrop-blur px-8 flex items-center justify-between">
      <div className="text-lg font-bold md:text-xl">Mark</div>
      <ul className="hidden md:flex w-full justify-end space-x-6 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="buttons">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
        </li>
        <li className="buttons">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="size-7 md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
