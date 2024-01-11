import mainImage1 from "../../../Assets/Features/messaging-work1.png";
import mainImage2 from "../../../Assets/Features/messaging-work2.png";
import Container from "../../../Component/Container";
import ShowCase from "../ShowCase";

const Work = () => {
  return (
    <Container className=" pt-20 sm:pt-10 sm:pb-10 pb-20 px-0 2xl:px-0 bg-[#FBFBFB]">
      <div className="flex flex-col gap-12">
        <Container className="pt-0 pb-0">
          <ShowCase
            title={"Communicate with multiple team members"}
            text={
              "You can reach out to multiple members of your team, communicate better work better together"
            }
            image={mainImage1}
          />
        </Container>

        <div className="w-[70%] sm:w-full border-t-2 border-dashed" />

        <Container className="!pt-0 !pb-0">
          <ShowCase
            className={"flex-row-reverse"}
            imageClassName={"!justify-start"}
            title={"Reach out to one or many"}
            text={
              "It is possible to connect to one person on the team or multiple people at once through groups"
            }
            image={mainImage2}
          />
        </Container>

        <div className="w-[70%] sm:w-full border-t-2 border-dashed" />
      </div>
    </Container>
  );
};

export default Work;
