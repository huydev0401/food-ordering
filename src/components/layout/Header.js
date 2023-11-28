import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="font-semibold text-primary text-2xl" href="">
        Foody
      </Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link className="py-2 px-6 bg-primary rounded-full text-white" href="">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
