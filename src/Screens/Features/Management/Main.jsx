
import Container from "../../../Component/Container"
import mainPic from '../../../Assets/Features/management-main.png'
import MainHeading from "../MainHeading"



const Main = () => {
  return (
    <Container className="bg-[#FBFBFB] sm:bg-white !pb-16 h-[500px]">

      <MainHeading 
        subTitle={'TASK MANAGEMENT'}
        subTitleClassName={'text-[#3B5C59]'}
        title={'Get productive with the task management '}
        text={'Create and assign tasks to multiple members of the team'}
        handleClick={()=>{}}
        image={mainPic}
        imageClassName={'!mt-[-10px]'}
      />
     
    </Container>
  )
}

export default Main