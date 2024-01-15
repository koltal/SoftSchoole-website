import Container from "../../Component/Container";
import { BigHeading, NormalText } from "../../Component/Text";
import Button from "../../Component/Forms/Button";

const Main = ({ mainPic, title, text, mobilePic }) => {
  return (
    <Container className="pb-24 sm:pb-0 sm:px-0">
      <div>
        <div className="w-full relative">
          <img src={mainPic} className="sm:hidden" alt="" />
          <img src={mobilePic} className="hidden sm:block" alt="" />

          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center gap-6">
            <BigHeading className={"text-white"} text={title} />

            <NormalText
              className={
                "text-[18px] text-[#F9F9F9] w-[40%] sm:w-[90%] text-center"
              }
              text={text}
            />

            <Button
              withIcon={true}
              className="!h-[52px] !w-[185px]"
              text={"Get started now"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
