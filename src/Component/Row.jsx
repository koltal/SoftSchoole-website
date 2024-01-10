import { cn } from "../lib/utils";

const Row = ({ children, className }) => {
  return (
    <div className={cn("flex justify-between w-full", className)}>
      {children[0]}
      {children[1]}
    </div>
  );
};

export default Row;
