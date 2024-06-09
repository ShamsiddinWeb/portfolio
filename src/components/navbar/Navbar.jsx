import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav__start">
      <nav class="nav__links">
        <Link class="accaunt" href="https://google.com">
          Google
        </Link>
        <Link class="accaunt" href="/portfolio">
          MY PORTFOLIO
        </Link>
        <Link class="accaunt" href="https://t.me/shamsiddin_1101">
          My telegram
        </Link>
      </nav>

      <div class="container">
        <span class="text-1">WELCOME IN</span>
        <span class="text-2">Shamsiddin Norov</span>
      </div>
    </div>
  );
};

export default Navbar;
