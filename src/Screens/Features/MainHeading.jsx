import Button from "../../Component/Forms/Button";

const MainHeading = ({
  subTitle,
  subTitleClassName,
  title,
  text,
  handleClick,
  image,
  imageClassName,
}) => {
  return (
    <div className="flex flex-col">
      <div className=" flex sm:flex-col">
        <div className="w-[50%] sm:w-full flex flex-col gap-3 2xl:justify-center">
          <p className={`font-bold text-[12px] ${subTitleClassName}`}>
            {subTitle}
          </p>

          <div className=" flex flex-col gap-4 w-[75%] sm:w-full">
            <p className="text-[36px] sm:text-[20px] font-semibold sm:font-bold text-black-500 leading-[45.18px] sm:leading-6">
              {title}
            </p>
            <p className="text-[18x] sm:text-[16px] sm:w-full text-[#606665]">
              {text}
            </p>
            <Button
              withIcon={true}
              className="!h-[52px] !w-[185px]"
              text={"Get started now"}
              onClick={handleClick}
            />
          </div>
        </div>

        <div
          className={`w-[50%] sm:w-full flex justify-center mt-10 ${imageClassName}`}
        >
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
