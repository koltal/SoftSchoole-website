import { NormalHeading, NormalText } from "../../../Component/Text"
import mainImage from '../../../Assets/Features/schedule-work.png'
import Button from "../../../Component/Forms/Button"
import Container from "../../../Component/Container"

const Work = () => {
  return (

    <Container className=" !pt-20 !pb-20">
        <div className=" flex ">

            <div className="w-[50%] sm:w-full 2xl:flex 2xl:flex-col 2xl:justify-center">

                <div className=" flex flex-col gap-4 w-[60%] sm:w-full">
                    <NormalHeading 
                        text={'Create and define the way you work'}
                        className={'!text-[#606665] leading-6'}
                    />

                    <NormalText 
                        text={'With multiple members in, it is possible to create a schedule that can attend to work life balance'}
                        className={'!text-[14px] !text-black'}
                    />
                    <Button 
                        withIcon={true}
                        className="!h-[52px] !w-[185px]"
                        text={'Get started now'}
                        onClick={()=>{}}

                    />


                </div>
            </div>

            <div className="w-[50%] mt-5">
                <img src={mainImage} alt="" />
            </div>
        
        </div>

    </Container>
  )
}

export default Work