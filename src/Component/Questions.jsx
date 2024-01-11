import Row from "./Row";
import { LighterText, BigHeading } from "./Text";
import Container from "./Container";
import { IoAddOutline } from "react-icons/io5";

const Questions = () => {
  return (
    <Container className="px-40 mt-20 sm:mt-0">
      <Row className={" items-center sm:flex-col sm:gap-10"}>
        <div className="flex flex-col gap-3 w-[50%] sm:w-full">
          <LighterText text={"FAQ’s"} />

          <BigHeading
            className={
              "font-medium w-[30%] sm:w-full leading-9 sm:leading-6 sm:font-semibold"
            }
            text={"Frequently Asked Questions"}
          />
          <LighterText
            className={"text-[16px] w-[50%] sm:w-full"}
            text={
              "You can find the answers to some of your questions about NitroServe here"
            }
          />
        </div>

        <div className="w-[45%] sm:w-full ">
          {Array.from({ length: 5 }).map((_, index) => (
            <Temp id={index} arrayLength={4} />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Questions;

const Temp = ({ id, arrayLength }) => {
  return (
    <div
      key={id}
      className={`border-y-1 ${
        id !== arrayLength && "border-b-0"
      } border-[#C0CCCB] py-5 sm:py-4 flex justify-between items-center`}
    >
      <LighterText
        className={"text-[#222222] sm:text-[black] sm:font-semibold"}
        text={"How many people can use Nitroserve"}
      />
      <IoAddOutline size={20} />
    </div>
  );
};
