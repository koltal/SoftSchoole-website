
import Container from "../../Component/Container"
import Button from "../../Component/Forms/Button"
import mainPic from '../../Assets/Home/main.png'
import mainMobilePic from '../../Assets/Home/main-mobile.png'


const Main = () => {
  return (
    <Container className="bg-[#FCFCFC] sm:bg-white ">

      <div className=" flex justify-between sm:flex-col">

        <div className="w-[50%] sm:w-full self-center">

            <div className=" flex flex-col gap-4 w-[75%] sm:w-full">
                <p className="text-[36px] sm:text-[18px] font-semibold sm:font-bold text-black-500 leading-[45.18px] sm:leading-6">
                Efficiently manage employees and promote productivity.
                </p>
                <p className="text-[16px] sm:text-[14px] sm:w-[90%] text-[#606665]">
                    Take Control of Your Workforce Management and Scheduling Tasks with Our Employee-centric App
                </p>
                <Button 
                    withIcon={true}
                    className="!h-[52px] !w-[185px]"
                    text={'Get started now'}
                />

            </div>
        </div>

        <div className="sm:flex gap-5 my-6 hidden text-[26px] sm:text-[20px] text-gray-500">
          <p className="font-semibold">Google</p>
          <p className="font-semibold">Uber</p>
          <p className=" font-semibold">adidas</p>
        </div>

        {/* <div className="w-[43%] sm:w-full sm:mb-4 relative p-0 bg-white overflow-hidden rounded-xl shadow-shift-shadow sm:shadow-0">
              <img className="w-full object-none sm:hidden"  src={mainPic} alt="main" />
              <img className="w-full hidden object-none sm:inline-block"  src={mainMobilePic} alt="main" />

              <div className="absolute sm:hidden top-0 left-0 w-full h-full bg-[#F4F4F4] opacity-30"/>

        </div> */}
        <div className="50% relative">
          <img className="w-full sm:hidden"  src={mainPic} alt="main" />
          <img className="w-full hidden object-none sm:inline-block"  src={mainMobilePic} alt="main" />


        </div>
      </div>

      <div className="flex gap-5 mt-12 sm:hidden">
        <p className="text-[26px] text-gray-500">Google</p>
        <p className="text-[26px] text-gray-500">Uber</p>
        <p className="text-[26px] text-gray-500 font-semibold">adidas</p>
      </div>

    </Container>
  )
}

export default Main