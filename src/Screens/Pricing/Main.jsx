import Container from "../../Component/Container"
import { BigHeading, LighterText } from "../../Component/Text"

const Main = () => {
  return (
    <Container className="bg-[#FCFCFC] !py-20">
        <div className="flex flex-col items-center justify-center gap-7">
            <BigHeading 
                className={'!text-[36px] w-[40%] text-center leading-10'}
                text={'Choose the best plan for your business'}
            />
            
            <LighterText text={'NitroServe has a variety of plans for different organization levels'}/>
        </div>

    </Container>
  )
}

export default Main