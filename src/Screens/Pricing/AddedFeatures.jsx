import Container from "../../Component/Container"
import { NormalHeading, NormalText, LighterText } from "../../Component/Text"

const AddedFeatures = () => {
  return (
    <Container className="flex flex-col gap-14 mb-14">
      
        <div className="flex flex-col gap-3 w-[45%]">
          <NormalHeading text={'Added Features '}/>
          <NormalText text={'NitroServe has added integrations which connect you to third party services to make working NitroServe seamless and more efficient.'}/>
        </div>

        <div className="w-full flex justify-between">

          <Card 
            title={'Nitro AI'}
            text={'NitroServe has AI  capabilities to enable a efficient working environment'}
            price={'$1'}
          />

          <Card 
            title={'In App Messaging'}
            text={'For communication between team members, there is an in app messaging feature'}
            price={'$1'}
          />

          <Card 
            title={'Taks management'}
            text={'NitroServe has a task management tool to manage tasks for team members'}
            price={'$1'}
          />

        </div>

    </Container>
  )
}

export default AddedFeatures


const Card = ({title, text, price}) => {
  return (
    <div className="w-[30%] flex flex-col justify-between h-[206px] px-4 py-4 bg-[#F7FAFA] rounded-md">

      <div className="flex flex-col gap-2">
        <NormalText className={'!text-[18px] text-[#222222]'} text={title}/>

        <LighterText className={'!text-[16px]'} text={text}/>

      </div>

      <div>

        <NormalText className={'text-primary'} text={price}/>

        <NormalText className={'text-[#222222] !text-[14px]'} text={'Per user'}/>

      </div>


    </div>
  )
}