import {
  NormalText,
  LighterText,
  NormalHeading,
} from "../../../../Component/Text";

const Card = ({ title, text, price, footer, isPopular = false }) => {
  return (
    <div className="flex flex-col justify-between border-1 border-b-0 w-[30%] sm:w-full h-[205px] rounded-lg">
      <div className=" flex flex-col gap-3 px-3 pt-4">
        <div className="flex gap-2">
          <NormalText className={"font-bold"} text={title} />

          {isPopular && (
            <p className="text-[9px] text-[#2fa79f] font-medium bg-[#e0f6f5] px-2 py-1 rounded-lg">
              Popular plan
            </p>
          )}
        </div>

        <LighterText text={text} />

        <div className="flex items-center gap-1">
          <NormalHeading text={price} />
          <LighterText className={"mt-2"} text={"/user"} />
        </div>
      </div>

      <div className="bg-[#D5DBDB] text-[14px] px-3 py-2 rounded-b-lg">
        {footer}
      </div>
    </div>
  );
};

export default Card;
