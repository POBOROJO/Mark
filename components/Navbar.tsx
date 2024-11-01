import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background/60 sticky top-0 border-b backdrop-blur px-8">
      <div>Mark it down</div>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        {/* <li><Link href={"/contact"}>Contact</Link></li> */}
      </ul>
    </nav> 
  );
};

export default Navbar;
