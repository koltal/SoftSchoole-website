import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MobileNavItem = ({ Icon, text, active }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const path = `/${pathname.split("/")[1]}`;

  return (
    <div
      onClick={() => {
        navigate(active);
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
          path === active && "text-primary border-b-1 border-primary"
        } cursor-pointer items-center`}
      >
        <p>{text}</p>
        {!showDropDown ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>

      {showDropDown && (
        <div className={`pl-12 py-4 bg-white`}>
          {items.map((val, index) => (
            <div
              onClick={() => {
                navigate(val?.link);
                // dispatch(setToggleMobileNav(false))
              }}
              key={index}
              className={`flex gap-3 items-center cursor-pointer p-2 hover:opacity-70`}
            >
              <p
                className={`w-3 h-3 rounded-full border-1 border-main ${
                  pathname === val?.link && "bg-primary"
                }`}
              />
              <p
                className={`text-[12px] text-primary font-semibold ${
                  pathname !== val?.link && "opacity-70"
                }`}
              >
                {val?.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
