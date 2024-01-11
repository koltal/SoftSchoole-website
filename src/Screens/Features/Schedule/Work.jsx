import { NormalHeading, NormalText } from "../../../Component/Text";
import mainImage from "../../../Assets/Features/schedule-work.png";
import Button from "../../../Component/Forms/Button";
import Container from "../../../Component/Container";

const Work = () => {
  return (
    <Container className=" pt-20 sm:pt-10 sm:pb-5 pb-20">
      <div className=" flex sm:flex-col sm:gap-3">
        <div className="w-[50%] sm:w-full 2xl:flex 2xl:flex-col 2xl:justify-center">
          <div className=" flex flex-col gap-4 sm:gap-2 w-[60%] sm:w-full">
            <NormalHeading
              text={"Create and define the way you work"}
              className={"text-[#606665] sm:text-[20px] sm:w-[80%] leading-6"}
            />

            <NormalText
              text={
                "With multiple members in, it is possible to create a schedule that can attend to work life balance"
              }
              className={"!text-[14px] !text-black"}
            />
            <Button
              withIcon={true}
              className="!h-[52px] !w-[185px] sm:mt-2"
              text={"Get started now"}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="w-[50%] sm:w-full mt-5 sm:mt-8">
          <img src={mainImage} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Work;
