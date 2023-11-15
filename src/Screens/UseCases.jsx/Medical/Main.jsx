import Container from "../../../Component/Container"
import medPic from '../../../Assets/Usecase/usecase-med.png'
import { BigHeading, NormalText } from "../../../Component/Text"
import Button from "../../../Component/Forms/Button"

const Main = () => {
  return (
    <Container>
        <div>
            <div className="w-full relative">
                <img src={medPic} alt="" />

                <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center gap-6">

                    <BigHeading className={'text-white'} text={'Medical Institutions'}/>

                    <NormalText
                        className={'!text-[18px] text-[#F9F9F9] w-[40%] text-center'}
                        text={'With NitroServe’s shift scheduling and management system, it is easy and flexible to manage the schedules of medical practitioners'}/>

                    <Button 
                        withIcon={true}
                        className="!h-[52px] !w-[185px]"
                        text={'Get started now'}
                    />
                </div>

            </div>
        </div>

    </Container>
  )
}

export default Main