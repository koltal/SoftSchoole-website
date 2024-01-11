import Container from "../../Component/Container";
import { BigHeading, NormalHeading, LighterText } from "../../Component/Text";

const Tools = ({ title, list }) => {
  return (
    <Container className="pt-20 sm:pt-10 sm:mt-24 sm:pb-14 pb-40 sm:bg-[#F5F8FF]">
      <div className="flex flex-col gap-24 sm:gap-8 items-center w-full">
        <BigHeading
          text={title}
          className={
            "text-[#222222] w-[25%] sm:text-[22px] sm:w-[90%] text-center"
          }
        />

        <div className="w-full flex justify-between sm:items-center sm:flex-col sm:gap-8">
          {list.map((x, index) => (
            <Card id={index} icon={x?.icon} title={x?.title} text={x?.text} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Tools;

const Card = ({ id, icon, title, text }) => {
  return (
    <div
      key={id}
      className="flex flex-col gap-5 w-[25%] sm:w-[80%] sm:p-10 sm:bg-white items-center"
    >
      <div className=" w-[64px] h-[64px] rounded-md p-2 flex justify-center items-center bg-[#F1F7EB]">
        <img src={icon} alt="" />
      </div>

      <div className="flex flex-col gap-2">
        <NormalHeading className={"!text-[18px] text-center"} text={title} />

        <LighterText className={"text-center"} text={text} />
      </div>
    </div>
  );
};
