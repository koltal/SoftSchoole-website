import Row from "../../Component/Row"
import { LighterText, NormalHeading } from "../../Component/Text"
import Container from "../../Component/Container"
import { IoAddOutline } from "react-icons/io5";

const Questions = () => {
  return (
    <Container className="px-40 mt-20">
        <Row className={' items-center'}>

            <div className="flex flex-col gap-3 w-[50%]">
                <LighterText text={'FAQ’s'}/>

                <NormalHeading 
                    className={'!text-[32px] font-medium w-[30%] leading-9'}
                    text={'Frequently Asked Questions'}
                />
                <LighterText 
                    className={'text-[16px] w-[50%]'}
                    text={'You can find the answers to some of your questions about NitroServe here'}
                />
            </div>


            <div className="w-[45%]">

               {
                Array.from({length: 5}).map((_,index) => (
                    <Temp id={index} arrayLength={4}/>
                ))
               }
            </div>

        </Row>
    </Container>
  )
}

export default Questions


const Temp = ({id, arrayLength}) => {
    return (
        <div 
            key={id} 
            className={`border-y-1 ${id !== arrayLength && 'border-b-0'} border-[#C0CCCB] py-5 flex justify-between items-center`}>
        <LighterText className={'text-[#222222]'} text={'How many people can use Nitroserve'}/>
        <IoAddOutline size={20}/>
    </div>
    )
}