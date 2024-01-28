import Container from "../Container";
import { BigHeading, LighterText } from "../Text";
import Button from "../Forms/Button";
import Logo from "../Logo";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import footerPic1 from "../../Assets/Footer/footer1.png";
import footerPic2 from "../../Assets/Footer/footer2.png";
import footerMobilePic1 from "../../Assets/Footer/footer-mobile1.png";
import footerMobilePic2 from "../../Assets/Footer/footer-mobile2.png";

const Footer = ({ withoutFooter }) => {
  return (
    <div className="flex flex-col gap-10">
      {!withoutFooter ? (
        <Container>
          <div className="bg-primary h-[354px] sm:h-[155px] rounded-lg flex justify-between relative">
            <div className="flex items-end">
              <img className="sm:hidden" src={footerPic1} alt="" />
              <img
                className="hidden sm:inline-block"
                src={footerMobilePic1}
                alt=""
              />
            </div>

            <div className=" absolute top-1/4 flex flex-col gap-12 sm:gap-4 justify-center items-center w-full">
              <BigHeading
                className={
                  "text-[white] font-bold w-[40%] sm:w-full sm:!text-[16px] text-center"
                }
                text={"Sign up and get started on Soft Schoole"}
              />

              <Button
                className="!bg-[#032B29] !w-[13%] sm:!w-[40%] !h-[45px]"
                text={"Get started now"}
              />
            </div>

            <div className="">
              <img className="sm:hidden" src={footerPic2} alt="" />
              <img
                className="hidden sm:inline-block"
                src={footerMobilePic2}
                alt=""
              />
            </div>
          </div>
        </Container>
      ) : null}

      <div className="border-t-1">
        <Container className="!pb-0">
          <div className="flex flex-col gap-5">
            <Logo />

            <div className="flex sm:flex-col sm:items-start items-center">
              <div className="flex gap-5 pl-3 text-[18px] w-[40%]">
                <FaXTwitter />
                <IoLogoInstagram />
              </div>

              <div className="flex sm:flex-col sm:mt-10 gap-8 sm:gap-5 px-2">
                <p className="text-[16px]">Terms & service</p>
                <p className="text-[16px]">Privacy</p>
                <p className="text-[16px]">Contact us</p>
              </div>
            </div>

            <div className="border-t-[2px] py-4 sm:pb-8 mt-9 sm:mt-20">
              <LighterText
                className={"text-[16px] text-center"}
                text={"2023. All rights reserved"}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
