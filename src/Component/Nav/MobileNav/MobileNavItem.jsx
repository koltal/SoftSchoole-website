import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import handleScrollToTop from "../scroll";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavItem = ({ Icon, text, active }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const path = `/${pathname.split("/")[1]}`;

  return (
    <div
      onClick={() => {
        navigate(active);
        handleScrollToTop();
        // dispatch(setToggleMobileNav(false));
      }}
      className={`flex gap-5 px-4 py-2 ${
        path === active && "text-primary border-b-1 border-primary"
      } cursor-pointer items-center`}
    >
      <p>{text}</p>
    </div>
  );
};

export default MobileNavItem;

export const DropDownMobileNavItem = ({ Icon, text, active, items = [] }) => {
  const { pathname } = useLocation();
  const path = `/${pathname.split("/")[1]}`;
  // const dispatch = useDispatch()
  const navigate = useNavigate();

  const [showDropDown, setShowDropDown] = useState(path === active);

  return (
    <div>
      <div
        onClick={() => {
          setShowDropDown((prev) => !prev);
        }}
        className={`flex gap-5 px-4 py-2 ${
          path === active && "text-primary-dark border-b-1 border-primary"
        } cursor-pointer items-center`}
      >
        <p>{text}</p>
        {!showDropDown ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <AnimatePresence>
        {showDropDown && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100px", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            className={`pl-12 py-4 bg-white`}
          >
            {items.map((val, index) => (
              <div
                onClick={() => {
                  navigate(val?.link);
                  handleScrollToTop();
                  // dispatch(setToggleMobileNav(false))
                }}
                key={index}
                className={`flex gap-3 items-center cursor-pointer p-2 hover:opacity-70`}
              >
                <p
                  className={`w-3 h-3 rounded-full border-1 border-main ${
                    pathname === val?.link && "bg-primary-dark"
                  }`}
                />
                <p
                  className={`text-[12px] text-primary-dark font-semibold ${
                    pathname !== val?.link && "opacity-70"
                  }`}
                >
                  {val?.name}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
