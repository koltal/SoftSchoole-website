import Container from "../../Component/Container";
import mainPic from "../../Assets/Contact/contactpic.png";
import { BigHeading, NormalText } from "../../Component/Text";
import Form from "./Form";

const Main = () => {
  return (
    <Container className="mb-52">
      <div className="w-full relative">
        <img src={mainPic} className="w-full" alt="" />

        <div className="absolute top-0 w-full h-full flex px-24 py-32">
          <div className="flex flex-col gap-2">
            <BigHeading className={"text-white"} text={"Contact us"} />

            <NormalText
              className={"!text-[18px] text-[#F9F9F9] w-[60%]"}
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
