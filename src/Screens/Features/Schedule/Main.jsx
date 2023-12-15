
import Container from "../../../Component/Container"
import mainPic from '../../../Assets/Features/schedule-main.png'
import Button from "../../../Component/Forms/Button"



const Main = () => {
  return (
    <Container className="bg-[#FBFBFB] sm:bg-white !pb-16 h-[500px]">
        

      <div className=" flex h-full">

        <div className="w-[65%] 2xl:w-[50%] sm:w-full flex flex-col gap-3 2xl:justify-center">

            <p className={`font-bold text-[12px] text-[#5175F3]`}>SCHEDULING</p>

            <div className=" flex flex-col gap-4 w-[75%] sm:w-full">
                <p className="text-[36px] sm:text-[18px] font-semibold sm:font-bold text-black-500 leading-[45.18px] sm:leading-6">
                Scheduling management for various teams
                </p>
                <p className="text-[18x] sm:text-[14px] sm:w-[90%] text-[#606665]">
                Manage all your schedules efficiently with the flexible NitroServe schedule module
                </p>
                <Button 
                    withIcon={true}
                    className="!h-[52px] !w-[185px]"
                    text={'Get started now'}
                    onClick={()=> {}}

                />


            </div>
        </div>


        <div className="w-[50%] absolute right-12 h-[346px] mt-3">
          <img className="" src={mainPic} alt="" />

        </div>

      </div>
    </Container>
  )
}

export default Main