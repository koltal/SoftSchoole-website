
import Layout from "../../Component/Layout"
import Main from "./Main"
import Growth from "./Growth"
import Schedules from "./Schedules"

const Home = () => {
  return (
   <Layout >
        <div>
            <Main/>
            <Growth/>
            <Schedules/>
        </div>
   </Layout>
  )
}

export default Home