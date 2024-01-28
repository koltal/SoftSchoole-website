import { BsArrowUpRight } from "react-icons/bs";
import { cn } from "../../lib/utils";

const Button = ({
  text,
  type = "fill",
  className = "",
  Icon = BsArrowUpRight,
  withIcon = false,
  onClick = () => {},
}) => {
  return (
    <>
      {type === "fill" ? (
        <button
          onClick={onClick}
          className={cn(
            "w-[78px] h-[38px] sm:text-[14px] flex justify-center gap-2 items-center bg-primary font-bold text-white rounded-md hover:bg-primary",
            className
          )}
        >
          <p>{text}</p>
          {withIcon && <Icon />}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={cn(
            "w-[78px] h-[38px] sm:text-[14px] flex justify-center gap-2 items-center border-1 font-bold border-primary text-black rounded-md hover:border-[#32b2a9]",
            className
          )}
        >
          <p>{text}</p>
          {withIcon && <Icon />}
        </button>
      )}
    </>
  );
};

export default Button;
