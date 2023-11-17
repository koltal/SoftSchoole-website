import Container from "../../Component/Container"
import { BigHeading, NormalText, LighterText } from "../../Component/Text"


const Do = ({title, text, cardList}) => {
  return (
    <Container className="bg-[#F9FBFF] !pt-20 !pb-20">
        <div className="flex flex-col items-center gap-14">

            <div className="flex flex-col w-[50%] gap-3 items-center">

                <BigHeading className={'!text-[#606665]'} text={title}/>

                <NormalText 
                    className={'text-center'}
                    text={text}/>
            </div>

            <div className="flex w-full justify-between">
                {
                    cardList.map((val, index) => (

                        <Card
                            pic={val?.pic}
                            title={val?.title}
                            text={val?.text}
                            id={index}
                        />
                    ))
                }

            </div>


        </div>

    </Container>
  )
}

export default Do

const Card = ({pic, title, text, id}) => {
    return (
        <div key={id}
            className="bg-gradient-to-b from-[#FFFFFF] to-[#F9FBFF] w-[25%] h-[260px] flex flex-col justify-center items-center gap-3">
            <img src={pic} alt="" />
            <NormalText className={'!text-[20px]'} text={title}/>
            <LighterText className={'text-center w-[60%]'} text={text}/>


        </div>

    )
}