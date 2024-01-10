import Input from "../../Component/Forms/Input";
import Row from "../../Component/Row";
import TextArea from "../../Component/Forms/TextArea";
import Button from "../../Component/Forms/Button";

const Form = () => {
  return (
    <div className="bg-white h-[437px] shadow-shift-shadow w-[454px] rounded-md px-6 py-5 flex flex-col gap-4">
      <Row className={"gap-4"}>
        <Input placeholder="Enter name" label labelName="Enter name" />
        <Input placeholder="Enter name" label labelName="Last name" />
      </Row>
      <Input placeholder="example@gmail.com" label labelName="Email" />
      <TextArea label labelName="Message" rows="5" />

      <Button text={"Contact us"} className="w-full mt-5" />
    </div>
  );
};

export default Form;
