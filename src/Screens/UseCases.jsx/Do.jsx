import Container from "../../Component/Container";
import { BigHeading, NormalText, LighterText } from "../../Component/Text";

const Do = ({ title, text, cardList }) => {
  return (
    <Container className="bg-[#F9FBFF] pt-20 sm:pt-10 pb-20 sm:pb-14">
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col w-[50%] sm:w-full gap-3 items-center">
          <BigHeading className={"text-[#606665]"} text={title} />

          <NormalText className={"text-center"} text={text} />
        </div>

        <div className="flex sm:flex-col sm:gap-6 w-full sm:items-center justify-between">
          {cardList.map((val, index) => (
            <Card
              pic={val?.pic}
              title={val?.title}
              text={val?.text}
              id={index}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Do;

const Card = ({ pic, title, text, id }) => {
  return (
    <div
      key={id}
      className="bg-gradient-to-b from-[#FFFFFF] sm:to-[#FFFFFF] to-[#F9FBFF] sm:rounded-md w-[25%] sm:w-[80%] h-[260px] flex flex-col justify-center items-center gap-3"
    >
      <img src={pic} alt="" />
      <NormalText className={"text-[20px] font-bold"} text={title} />
      <LighterText className={"text-center w-[60%] sm:w-[80%]"} text={text} />
    </div>
  );
};
