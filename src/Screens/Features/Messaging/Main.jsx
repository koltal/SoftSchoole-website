import Container from "../../../Component/Container";
import mainPic from "../../../Assets/Features/messaging-main.png";
import MainHeading from "../MainHeading";

const Main = () => {
  return (
    <Container className="bg-[#FBFBFB] sm:bg-white pb-16 h-[500px]">
      <MainHeading
        subTitle={"MESSAGING"}
        subTitleClassName={"text-[#9747FF]"}
        title={"Promote better team work across teams with messaging"}
        text={
          "Organizing chats for spreading informations better across teams and organization"
        }
        handleClick={() => {}}
        image={mainPic}
      />
    </Container>
  );
};

export default Main;
