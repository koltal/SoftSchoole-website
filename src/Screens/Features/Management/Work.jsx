import mainImage1 from '../../../Assets/Features/management-work1.png'
import mainImage2 from '../../../Assets/Features/management-work2.png'
import Container from "../../../Component/Container"
import ShowCase from "../ShowCase"

const Work = () => {
  return (

    <Container className=" !pt-20 !pb-20 px-0 2xl:!px-0 bg-[#FBFBFB]">

        <div className="flex flex-col gap-12">

            <Container className="!pt-0 !pb-0">
                <ShowCase
                    title={'Manage tasks better with boards'}
                    text={'For better management, a group of tasks can be grouped into a board and be treated seperately from other tasks'}
                    image={mainImage1}
                />
            </Container>


            <Container className="!pt-0 !pb-0">
                <ShowCase
                    className={'flex-row-reverse'}
                    imageClassName={'!justify-start'}
                    title={'Track, update and finish tasks'}
                    text={'Track the progress of different tasks and update the status of these tasks as you go'}
                    image={mainImage2}
                />

            </Container>



        </div>

      

    </Container>
  )
}

export default Work

