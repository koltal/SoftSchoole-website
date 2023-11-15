import Container from "../../Component/Container"
import sch1 from '../../Assets/Home/schedule1.png'
import sch2 from '../../Assets/Home/schedule2.png'
import sch3 from '../../Assets/Home/schedule3.png'
import { NormalHeading, LighterText } from "../../Component/Text"
import tickIcon from '../../Assets/Home/tick.png'
import Row from "../../Component/Row"
 

const rowSyle = 'sm:flex-col-reverse'

const Schedules = () => {
  return (
    <Container className="bg-[#FDFFFF] !py-28 sm:!py-20">
        <div className="flex flex-col gap-36 sm:gap-20">

            <Row className={rowSyle}>
                <img src={sch1} alt="" className="w-[45%] sm:w-full sm:mt-16"/>

                <Temp
                    title={'Scheduler'}
                    mainText={'Create and manage schedules seamlessly'}
                    subText={'NirtroServe is equipped with tools which can help to create schedules for workers, and with it’s flexibility this works for a wide range of teams'}
                    tickText1={'Create schedules for multiple team members'}
                    tickText2={'Manage schedules'}
                />
            </Row>

            <Row className={'sm:flex-col'}>

                <Temp
                    title={'Task system'}
                    mainText={'Task management system'}
                    subText={'Another of NitroServe’s tools is the task management systems which provides the ability for tasking capabilities for different team members'}
                    tickText1={'Create task for multiple team members '}
                    tickText2={'Mange tasks for different teams easily '}
                />

                <img src={sch2} alt="" className="w-[45%] h-[450px] sm:h-[340px] sm:w-full sm:mt-16"/>

            </Row>

            <Row className={rowSyle}>
                <img src={sch3} alt="" className="w-[45%] h-[450px] sm:h-[340px] sm:w-full sm:mt-16"/>

                <Temp
                    title={'Reports'}
                    mainText={'Track work time'}
                    subText={'Detailed Reports for Worked Days, Absences, and Vacations. NitroServe makes it possible to see days worked, and days missed for team members'}
                    tickText1={'View work days fro different employees'}
                    tickText2={'Manage work schedules with detailed reports'}
                />


            </Row>

        </div>
    </Container>
  )
}

export default Schedules


const Temp = ({title, mainText, subText, tickText1, tickText2}) => {
    return (

        <div className="w-[45%] sm:w-full mt-10 sm:mt-0 flex flex-col gap-4">

            <div>

                <span
                className="px-3 py-2 rounded-2xl text-white text-[14px] bg-[#15878C]">
                    {title}
                </span>
            </div>


            <NormalHeading 
                className='w-[453px] sm:w-[80%] sm:leading-6 leading-7'
                text={mainText}
            />

            <LighterText 
                className='w-[453px] sm:w-[95%]'
                text={subText}
            />

            <div className="flex flex-col mt-7">
                <div className="border-y-[2px] border-[#C0CCCB] py-3 flex gap-3 items-center">
                    <img className="px-[6px] sm:px-[4px] py-[6px] sm:py-[4px] rounded-full bg-[#15878C]" src={tickIcon} alt="" />
                    <LighterText text={tickText1}/>
                </div>

                <div className="border-b-[2px] border-[#C0CCCB] py-3 flex gap-3 items-center">
                    <img className="px-[6px] sm:px-[4px] py-[6px] sm:py-[4px] rounded-full bg-[#15878C]" src={tickIcon} alt="" />
                    <LighterText text={tickText2}/>
                </div>

            </div>

        </div>
    )
}