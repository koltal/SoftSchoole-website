import Container from "../../Component/Container";
import Button from "../../Component/Forms/Button";

const Efficiency = ({ text, title, cardList }) => {
  return (
    <Container className=" pt-28 sm:pt-8 pb-32 sm:pb-0">
      <SubHead
        title={title}
        text={text}
        cardList={cardList}
        handleClick={() => {}}
      />
    </Container>
  );
};

export default Efficiency;

const SubHead = ({ cardList, title, text, handleClick }) => {
  return (
    <div className=" flex sm:flex-col sm:gap-3">
      <div className="w-[50%] sm:w-full">
        <div className=" flex flex-col gap-4 w-[75%] sm:w-full">
          <p className="text-[32px] sm:text-[24px] font-semibold sm:font-bold text-black-500 leading-[45.18px] sm:leading-6">
            {title}
          </p>
          <p className="text-[16px] sm:text-[16px] sm:w-[90%] text-[#606665]">
            {text}
          </p>
          <Button
            withIcon={true}
            className="h-[52px] w-[185px] sm:my-4"
            text={"Get started now"}
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="w-[50%] sm:w-full flex flex-wrap justify-between">
        {cardList.map((val, index) => (
          <Card title={val?.title} icon={val?.icon} id={index} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, icon, id }) => {
  return (
    <div
      kex={id}
      className="border-1 w-[47%] h-[130px] sm:h-[71px] py-3 px-4 text-[16px] font-bold mb-8 rounded-md"
    >
      <img src={icon} alt="" className="sm:h-[27px] sm:w-[27px]" />
      <p className="pl-2 sm:text-[12px] font-bold">{title}</p>
    </div>
  );
};
