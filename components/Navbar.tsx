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

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  }
  if (hour < 18) {
    return "Good Afternoon";
  }
  return "Good Evening";
};

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/40 sticky top-0 border-b backdrop-blur px-8 flex items-center justify-between z-10">
      <div className="text-lg font-bold md:text-xl">
        <Link href={"/"}>Mark</Link>
      </div>
      <ul className="hidden md:flex w-full justify-end space-x-4 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="buttons px-4 space-x-2">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
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
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle> {`Hi there, ${getGreeting()}`}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="text-lg">
                Home
              </Link>
              <Link href="/about" className="text-lg">
                About
              </Link>
              <Link href="/blog" className="text-lg">
                Blog
              </Link>
              <Link href="/contact" className="text-lg">
                Contact
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Login
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "default",
                  className: "w-full",
                })}
              >
                Sign Up
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
