
import Layout from "../../Component/Layout"
import Main from "./Main"
import Growth from "./Growth"
import Schedules from "./Schedules"
import Functions from "./Functions"
import Questions from "../../Component/Questions"

const Home = () => {
  return (
   <Layout >
        <div>
            <Main/>
            <Growth/>
            <Schedules/>
            <Functions/>
            <Questions/>
        </div>
   </Layout>
  )
}

export default Home