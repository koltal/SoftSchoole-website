import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const Input = ({
  className,
  labelClassName,
  label = false,
  labelName = "label",
  type = "text",
  ref,
  ...props
}) => {
  const InputVariants = cva("text-[13px]", {
    variants: {
      label: {
        true: " ",
        false: "hidden",
      },
    },
    defaultVariants: {
      label: true,
    },
  });

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="input"
        className={cn(InputVariants({ label }), labelClassName)}
      >
        {labelName}
      </label>
      <input
        type={type}
        ref={ref}
        className={cn(
          " focus:outline-none border-1 border-[#E8EDED] w-full p-3 rounded-lg placeholder:text-A5A text-[13px]",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
