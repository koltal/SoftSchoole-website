
import Container from "../../Component/Container"
import icon1 from '../../Assets/Home/growth-1.png'
import icon2 from '../../Assets/Home/growth-2.png'
import icon3 from '../../Assets/Home/growth-3.png'
import { LighterText, NormalHeading } from "../../Component/Text"



const Growth = () => {
  return (
    <Container className="bg-[#F7FBFF] !py-14">
        <div className="flex flex-col gap-4 items-center">
            <NormalHeading text={'Benefits of Using SoftSchoole'}/>

            <p className="text-[16px] sm:text-[14px] w-[65%] sm:w-full text-gray-600 text-center">With the presence of our various tools to manage multiple  employees, efficiency and growth is assure using NitroServe </p>

            <div className="flex sm:flex-col w-full gap-16 sm:gap-12 mt-10 sm:mt-8">
                <Card 
                    title={'Admission Process Simplified'}
                    text='NitroServe offers a comprehensive suite of tools designed to simplify your tasks and boost your productivity.'
                />

                <Card 
                    title={' Compiled Results with Ease'}
                    text='Our intuitive interface ensures effortless navigation for quick access to the right tool.'
                    icon={icon2}
                />


                <Card 
                    title={'Financial Autonomy'}
                    text='Providing support is crucial and it is made possible to ensure seamless experiences.'
                    icon={icon3}
                />
                
            </div>
            <div className="flex sm:flex-col w-full gap-16 sm:gap-12 mt-10 sm:mt-8">
                <Card 
                    title={'Admission Process Simplified'}
                    text='NitroServe offers a comprehensive suite of tools designed to simplify your tasks and boost your productivity.'
                />

                <Card 
                    title={' Compiled Results with Ease'}
                    text='Our intuitive interface ensures effortless navigation for quick access to the right tool.'
                    icon={icon2}
                />


                <Card 
                    title={'Financial Autonomy'}
                    text='Providing support is crucial and it is made possible to ensure seamless experiences.'
                    icon={icon3}
                />
                
            </div>
        </div>
    </Container>
  )
}

export default Growth


const Card = ({title, text, icon=icon1}) => {

    return (
        <div className="bg-white flex flex-col gap-3 pt-10 px-8 sm:px-6 rounded items-center sm:self-center w-[40%] sm:w-[80%] h-[346px] sm:h-[270px]">
            <img className="w-[84px] sm:w-[56px] h-[84px] sm:h-[56px] mb-3" src={icon} alt="" />
            <NormalHeading text={title} className='!text-[20px] sm:!text-[16px] !font-semibold !text-[#222222]'/>
            <LighterText text={text} className='text-center'/>
        </div>
    )
}