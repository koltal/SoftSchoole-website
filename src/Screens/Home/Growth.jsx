
import Container from "../../Component/Container"
import icon1 from '../../Assets/Home/growth-icon.png'

const Growth = () => {
  return (
    <Container className="bg-[#F7FBFF] !py-14">
        <div className="flex flex-col gap-4 items-center">
            <p className="text-[24px] font-semibold">Built for promoting growth</p>

            <p className="text-[16px] w-[65%] text-gray-600 text-center">With the presence of our various tools to manage multiple  employees, efficiency and growth is assure using NitroServe </p>

            <div className="flex gap-10 mt-10">
                <Card 
                    title={'Multiple tools'}
                    text='NitroServe offers a comprehensive suite of tools designed to simplify your tasks and boost your productivity.'
                />

                <Card 
                    title={'User friendly'}
                    text='Our intuitive interface ensures effortless navigation for quick access to the right tool.'
                />


                <Card 
                    title={'Support'}
                    text='Providing support is crucial and it is made possible to ensure seamless experiences.'
                />
            </div>
        </div>
    </Container>
  )
}

export default Growth


const Card = ({title, text, icon=icon1}) => {

    return (
        <div className="bg-white flex flex-col gap-3 pt-10 px-8 rounded items-center w-[325px] h-[346px]">
            <img className="w-[84px] h-[84px] mb-3" src={icon} alt="" />
            <p className="text-[20px] font-semibold">{title}</p>
            <p className="text-[14px] text-center text-gray-500">{text}</p>
        </div>
    )
}