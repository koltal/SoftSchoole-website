
import Container from "../../Component/Container"
import Button from "../../Component/Forms/Button"
import mainPic from '../../Assets/Home/main.png'

const Main = () => {
  return (
    <Container className="bg-[#FCFCFC] ">

      <div className=" flex justify-between">

        <div className="w-[50%]  ">

            <div className=" flex flex-col gap-4 w-[75%]">
                <p className="text-[36px] font-semibold text-black-500 leading-[45.18px]">
                Efficiently manage employees and promote productivity.
                </p>
                <p className="text-[16px] text-[#606665]">
                    Take Control of Your Workforce Management and Scheduling Tasks with Our Employee-centric App
                </p>
                <Button 
                    withIcon={true}
                    className="!h-[52px] !w-[185px]"
                    text={'Get started now'}
                />

            </div>
        </div>

        <div className="w-[43%] relative p-0 bg-white overflow-hidden rounded-xl shadow-shift-shadow">
              <img className="w-full object-none"  src={mainPic} alt="main" />
              <div className="absolute top-0 left-0 w-full h-full bg-[#F4F4F4] opacity-30"/>

        </div>
      </div>

      <div className="flex gap-5 mt-12">
        <p className="text-[26px] text-gray-300">Google</p>
        <p className="text-[26px] text-gray-300">Uber</p>
        <p className="text-[26px] text-gray-300 font-semibold">adidas</p>
      </div>

    </Container>
  )
}

export default Main