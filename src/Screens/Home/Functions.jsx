
import Row from "../../Component/Row"
import func1 from '../../Assets/Home/function1.png'
import func2 from '../../Assets/Home/device2.png'

import { NormalHeading, LighterText } from "../../Component/Text"

const Functions = () => {
  return (
    <div>
        {/* <Row className={'sm:flex-col-reverse sm:gap-10'}>
            <img className="sm:px-4" src={func1} alt="" />

            <Temp 
                title={'Multiple integrations for seamless function'}
                text={'Nitroserve is connected to multiple integrations to help you achieve more in just one place'}
            />

        </Row> */}

        <Row className={'sm:flex-col sm:gap-10'}>

            <Temp 
                className={'items-end'}
                title={'Supports functions on multiple device types'}
                text={'Nitroserve can be accessed on desktop which allows some features and also on the mobile app'}
            />
            <img className="sm:px-4 w-[50%] sm:w-[100%]" src={func2} alt="" />

        </Row>
    </div>
  )
}

export default Functions

const Temp = ({className, title, text}) => {
    return (
        <div className={`w-[50%] sm:w-full flex flex-col justify-center px-16 sm:px-4 gap-4 ${className}`}>

            <NormalHeading 
                className={'leading-7 w-[80%] sm:w-full'}
                text={title}
            />
            <LighterText 
                className={'w-[80%] sm:w-full'}
                text={text}
            />

        </div>
    )
}