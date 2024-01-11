import Container from "../../../Component/Container";
import Toggle from "./Component/Toggle";
import Card from "./Component/Card";

const Plan = () => {
  return (
    <Container className="sm:px-8">
      <div>
        <div className="flex flex-col gap-10 items-center">
          <Toggle />

          <div className="flex gap-8 sm:flex-col justify-center w-full">
            <Card
              title={"Basic Plan"}
              text={"6-20 users allowed (First 5 users free)"}
              price={"$2.99"}
              footer={"For small organizations"}
            />

            <Card
              title={"Business Plan"}
              text={"21-50 users allowed"}
              price={"$3.99"}
              footer={"For growing teams"}
              isPopular
            />

            <Card
              title={"Enterprise Plan"}
              text={"Unlimited users allowed"}
              price={"$4.99"}
              footer={"For large organizations"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Plan;
