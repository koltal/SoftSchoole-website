
import Container from "../../Component/Container"
import Button from "../../Component/Forms/Button"
import mainPic from '../../Assets/Home/device2.png'
import mainMobilePic from '../../Assets/Home/main-mobile.png'


const Main = () => {
  return (
    <Container className="bg-[#FCFCFC] sm:bg-white ">

      <div className=" flex justify-between sm:flex-col">

        <div className="w-[90%] sm:w-full self-center">

            <div className=" flex flex-col gap-4 w-[95%] sm:w-full">
                <p className="text-[36px] sm:text-[18px] font-semibold sm:font-bold text-black-500 leading-[45.18px] sm:leading-6">
                Online School Management Software
                </p>
                <p className="text-[16px] sm:text-[14px] sm:w-[90%] text-[#606665]">
                SoftSchoole is designed to help you streamline your school Admissions, fees collection, improve classroom management and keep parents informed
                </p>
                <Button 
                    withIcon={true}
                    className="!h-[52px] !w-[185px]"
                    text={'Get started for free'}
                />

            </div>
        </div>

        {/* <div className="sm:flex gap-5 my-6 hidden text-[26px] sm:text-[20px] text-gray-500">
          <p className="font-semibold">Google</p>
          <p className="font-semibold">Uber</p>
          <p className=" font-semibold">adidas</p>
        </div> */}

        <div className="50% relative">
          <img className="w-full sm:hiddens"  src={mainPic} alt="main" />
          {/* <img className="w-full hidden object-none sm:inline-block"  src={mainMobilePic} alt="main" /> */}


        </div>
      </div>

      {/* <div className="flex gap-5 mt-12 sm:hidden">
        <p className="text-[26px] text-gray-500">Google</p>
        <p className="text-[26px] text-gray-500">Uber</p>
        <p className="text-[26px] text-gray-500 font-semibold">adidas</p>
      </div> */}

    </Container>
  )
}

export default Main