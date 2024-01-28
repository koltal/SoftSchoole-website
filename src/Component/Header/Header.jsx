import Logo from "../Logo";
import Nav from "../Nav/Nav";
import Button from "../Forms/Button";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import MobileNav from "../Nav/MobileNav/MobileNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  document.body.style.overflow = toggleMenu ? "hidden" : "auto";
  return (
    <div className="bg-white fixed w-full z-50">
      <div className="flex justify-between items-center px-16 sm:px-2 sm:pr-4 h-16 ">
        <Link to={"/"}>
          <Logo />
        </Link>

        <Nav />

        <div className="flex gap-3 sm:hidden">
          <Link to={"https://school-web-app-iota.vercel.app/"}>
            <Button text="Enroll" />
          </Link>

          <Link to={"https://app.nitroserve.co/signup"}>
            <Button text="Log in" type="outline" />
          </Link>
        </div>

        <TbMenu2
          className="hidden sm:block"
          size={28}
          onClick={() => setToggleMenu((prev) => !prev)}
        />
      </div>
      <div className="h-8 sm:hidden" />
      <AnimatePresence>
        {toggleMenu && <MobileNav setToggleMenu={setToggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
