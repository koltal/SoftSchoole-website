import Container from "../../Component/Container"
import sch1 from '../../Assets/Home/schedule1.png'
import sch2 from '../../Assets/Home/schedule2.png'
import { NormalHeading, LighterText } from "../../Component/Text"
import tickIcon from '../../Assets/Home/tick.png'
 

const Schedules = () => {
  return (
    <Container className="bg-[#FDFFFF] !py-28">
        <div className="flex flex-col gap-36">

            <Row>
                <img src={sch1} alt="" className="w-[45%]"/>

                <Temp
                    title={'Scheduler'}
                    mainText={'Create and manage schedules seamlessly'}
                    subText={'NirtroServe is equipped with tools which can help to create schedules for workers, and with it’s flexibility this works for a wide range of teams'}
                    tickText1={'Create schedules for multiple team members'}
                    tickText2={'Manage schedules'}
                />
            </Row>

            <Row>

                <Temp
                    title={'Task system'}
                    mainText={'Task management system'}
                    subText={'Another of NitroServe’s tools is the task management systems which provides the ability for tasking capabilities for different team members'}
                    tickText1={'Create task for multiple team members '}
                    tickText2={'Mange tasks for different teams easily '}
                />

                <img src={sch2} alt="" className="w-[45%]"/>

            </Row>

        </div>
    </Container>
  )
}

export default Schedules

const Row = ({children, className}) => {
    return (
        <div className={`flex justify-between w-full ${className}`}>
            {children[0]}
            {children[1]}
        </div>
    )
}

const Temp = ({title, mainText, subText, tickText1, tickText2}) => {
    return (

        <div className="w-[45%] mt-10 flex flex-col gap-4">

            <p className="px-3 py-2 min-w-[84px] rounded-2xl text-center text-white text-[14px] bg-[#15878C]">
                {title}
            </p>

            <NormalHeading 
                className='w-[453px] leading-7'
                text={mainText}
            />

            <LighterText 
                className='w-[453px]'
                text={subText}
            />

            <div className="flex flex-col mt-5">
                <div className="border-y-[2px] border-[#C0CCCB] py-3 flex gap-3 items-center">
                    <img className="px-[6px] py-[6px] rounded-full bg-[#15878C]" src={tickIcon} alt="" />
                    <LighterText text={tickText1}/>
                </div>

                <div className="border-b-[2px] border-[#C0CCCB] py-3 flex gap-3 items-center">
                    <img className="px-[6px] py-[6px] rounded-full bg-[#15878C]" src={tickIcon} alt="" />
                    <LighterText text={tickText2}/>
                </div>

            </div>

        </div>
    )
}