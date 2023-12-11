import Container from "../../Component/Container"
import { BigHeading, NormalHeading, LighterText } from "../../Component/Text"

const Tools = ({title, list}) => {
  return (
    <Container className="!pt-20 !pb-40">
        <div className="flex flex-col gap-24 items-center w-full">

            <BigHeading 
                text={title}
                className={'!text-[#606665] w-[25%] text-center'}
            />

            <div className="w-full flex justify-between">
                {
                    list.map((x, index) => (
                        <Card 
                            id={index}
                            icon={x?.icon}
                            title={x?.title}
                            text={x?.text}
                        />
                    ))

                }
            </div>

        </div>
    </Container>
  )
}

export default Tools

const Card = ({id, icon, title, text}) => {
    return (
        <div key={id} className="flex flex-col gap-5 w-[25%] items-center">
            <div className=" w-[64px] h-[64px] rounded-md p-2 flex justify-center items-center bg-[#F1F7EB]">
                <img src={icon} alt="" />

            </div>

            <div className="flex flex-col gap-2">
                <NormalHeading 
                    className={'!text-[18px] text-center'}
                    text={title}
                />

                <LighterText 
                    className={'text-center'} 
                    text={text}
                />
            </div>
        </div>
    )
}