import MobileNavItem, { DropDownMobileNavItem } from "./MobileNavItem";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const MobileNav = ({ setToggleMenu }) => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ ease: "easeInOut" }}
      className="border-t-1 border-black bg-white z-50 fixed h-full top-16 w-full hidden sm:flex flex-col py-3 px-3"
    >
      <LiaTimesSolid
        onClick={() => setToggleMenu(false)}
        size={24}
        className="self-end"
      />
      <div className="flex flex-col gap-3">
        <MobileNavItem text={"Home"} active={"/"} />

        <DropDownMobileNavItem
          text={"Features"}
          active={"/features"}
          items={[
            { name: "Scheduling", link: "/features/scheduling" },
            { name: "Messaging", link: "/features/messaging" },
            { name: "Management", link: "/features/management" },
          ]}
        />

        <DropDownMobileNavItem
          text={"Use cases"}
          active={"/usecase"}
          items={[
            { name: "Medical", link: "/usecase/medical" },
            { name: "Construction", link: "/usecase/construction" },
            { name: "Cafe", link: "/usecase/cafe" },
          ]}
        />
        <MobileNavItem text={"Pricing"} active={"/pricing"} />
        <MobileNavItem text={"Contact Us"} active={"/contact"} />
      </div>
    </motion.div>
  );
};

export default MobileNav;
