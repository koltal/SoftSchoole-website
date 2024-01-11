import Container from "../../Component/Container";
import mainPic from "../../Assets/Contact/contactpic.png";
import { BigHeading, NormalText } from "../../Component/Text";
import Form from "./Form";

const Main = () => {
  return (
    <Container className="mb-52 sm:mb-72 sm:px-0">
      <div className="w-full relative">
        <img src={mainPic} className="w-full sm:h-[370px]" alt="" />

        <div className="absolute top-0 w-full h-full flex sm:flex-col sm:gap-10 px-24 sm:px-5 sm:py-16 py-32">
          <div className="flex flex-col gap-2">
            <BigHeading
              className={"text-white sm:text-[24px]"}
              text={"Contact us"}
            />

            <NormalText
              className={
                "text-[18px] text-[#F9F9F9] sm:text-[14px] sm:w-[80%] w-[60%]"
              }
              text={
                "You can send us a message anytime, our team would like to hear from you"
              }
            />
          </div>
          <Form />
        </div>
      </div>
    </Container>
  );
};

export default Main;
