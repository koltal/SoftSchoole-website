import Container from "../../../Component/Container"
import { BigHeading, NormalText, LighterText } from "../../../Component/Text"
import do1 from '../../../Assets/Usecase/usecaseDo1.png'
import do2 from '../../../Assets/Usecase/usecaseDo2.png'


const Do = () => {
  return (
    <Container className="bg-[#F9FBFF] !pb-20">
        <div className="flex flex-col items-center gap-14">

            <div className="flex flex-col w-[50%] gap-3 items-center">

                <BigHeading className={'!text-[#606665]'} text={'What you can do'}/>

                <NormalText 
                    className={'text-center'}
                    text={'With a  multiple features medical institutions can carry out activities using NitroServe on a day to day basis  to achieve it’s goals'}/>
            </div>

            <div className="flex w-full justify-between">
                <Card
                    pic={do1}
                    title={'Shift creation'}
                    text={'Create and manage shifts for different employees'}
                />

                <Card
                    pic={do1}
                    title={'Swap shifts'}
                    text={'Swap shifts between team members'}
                />

                <Card
                    pic={do2}
                    title={'Messaging'}
                    text={'You can communicate with team members easily'}
                />
            </div>


        </div>

    </Container>
  )
}

export default Do

const Card = ({pic, title, text}) => {
    return (
        <div 
            className="bg-gradient-to-b from-[#FFFFFF] to-[#F9FBFF] w-[25%] h-[260px] flex flex-col justify-center items-center gap-3">
            <img src={pic} alt="" />
            <NormalText className={'!text-[20px]'} text={title}/>
            <LighterText className={'text-center w-[60%]'} text={text}/>


        </div>

    )
}