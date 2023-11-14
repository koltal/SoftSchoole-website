
import Row from "../../Component/Row"
import func1 from '../../Assets/Home/function1.png'
import func2 from '../../Assets/Home/function2.png'

import { NormalHeading, LighterText } from "../../Component/Text"

const Functions = () => {
  return (
    <div>
        <Row>
            <img src={func1} alt="" />

            <Temp 
                title={'Multiple integrations for seamless function'}
                text={'Nitroserve is connected to multiple integrations to help you achieve more in just one place'}
            />

        </Row>

        <Row>

            <Temp 
                className={'items-end'}
                title={'Supports functions on multiple device types'}
                text={'Nitroserve can be accessed on desktop which allows some features and also on the mobile app'}
            />
            <img src={func2} alt="" />

        </Row>
    </div>
  )
}

export default Functions

const Temp = ({className, title, text}) => {
    return (
        <div className={`w-[50%] flex flex-col justify-center px-16 gap-4 ${className}`}>

            <NormalHeading 
                className={'leading-7 w-[80%]'}
                text={title}
            />
            <LighterText 
                className={'w-[80%]'}
                text={text}
            />

        </div>
    )
}