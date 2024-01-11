import Row from "../../Component/Row";
import { NormalHeading, NormalText } from "../../Component/Text";

const ShowCase = ({ title, text, image, className, imageClassName }) => {
  return (
    <Row className={`${className} sm:flex-col sm:gap-8`}>
      <div className=" flex flex-col justify-center gap-4 sm:gap-2 w-[50%] sm:w-full">
        <NormalHeading
          text={title}
          className={
            "text-[hsl(170,3%,39%)] sm:text-[20px] leading-6 w-[50%] sm:w-[90%]"
          }
        />

        <NormalText
          text={text}
          className={"text-[14px] text-black sm:w-full w-[80%]"}
        />
      </div>

      <div className={`w-[50%] sm:w-full flex justify-end ${imageClassName}`}>
        <img src={image} alt="" />
      </div>
    </Row>
  );
};

export default ShowCase;
