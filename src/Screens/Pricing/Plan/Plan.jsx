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
              title={"Free Plan"}
              text={"50 users allowed "}
              price={"Free"}
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
