import { cn } from "../../lib/utils";
const TickIcon = ({ className }) => {
  return (
    <svg
      className={cn("w-[24px] sm:w-[9px] h-[24px] sm:h-[9px]", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#15878C" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.4933 6.93502C18.8053 7.20743 18.8374 7.68122 18.565 7.99325L10.7079 16.9933C10.5654 17.1564 10.3594 17.25 10.1429 17.25C9.9263 17.25 9.72031 17.1564 9.57788 16.9933L6.43502 13.3933C6.16261 13.0812 6.19473 12.6074 6.50677 12.335C6.8188 12.0626 7.29259 12.0947 7.565 12.4068L10.1429 15.3596L17.435 7.00677C17.7074 6.69473 18.1812 6.66261 18.4933 6.93502Z"
        fill="white"
      />
    </svg>
  );
};

export default TickIcon;
