import Container from "../Container"
import {BigHeading, LighterText} from "../Text"
import Button from '../Forms/Button'
import Logo from '../Logo'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import footerPic1 from '../../Assets/Footer/footer1.png'
import footerPic2 from '../../Assets/Footer/footer2.png'



const Footer = () => {
  return (
    <div className="flex flex-col gap-10">
        <Container >

            <div className="bg-[#38C6BC] h-[354px] rounded-lg flex justify-between relative" >

                <div className="w-[30%] flex items-end">
                    <img src={footerPic1} alt="" />

                </div>

                <div className=" absolute top-1/4 flex flex-col gap-12 justify-center items-center w-full">
                    <BigHeading 
                        className={'text-[white] font-bold w-[40%] text-center'}
                        text={'Sign up and get started on NitroServe'}
                    
                    />

                    <Button 
                        className="!bg-[#032B29] !w-[13%] !h-[45px]"
                        text={'Get started now'}
                    />

                </div>

                <div className="w-[30%]">
                    <img src={footerPic2} alt="" />

                </div>


            </div>

        </Container>

        <div className="border-t-1">

            <Container className="!pb-0">
                <div className="flex flex-col gap-5">
                    <Logo/>

                    <div className="flex items-center">

                        <div className="flex gap-5 pl-3 text-[18px] w-[40%]">
                            <FaXTwitter />
                            <IoLogoInstagram />
                        </div>

                        <div className="flex gap-8">
                            <p className="text-[16px]">Terms & service</p>
                            <p className="text-[16px]">Privacy</p>
                            <p className="text-[16px]">Contact us</p>

                        </div>

                    </div>


                    <div className="border-t-[2px] py-4 mt-9">
                        <LighterText
                            className={'text-[16px] text-center'}
                             text={'2023. All rights reserved'}/>
                    </div>
                </div>
            </Container>

        </div>

    </div>
  )
}

export default Footer