import Layout from '../../../Component/Layout'
import MainCafe from './MainCafe'
import DoCafe from './DoCafe'
import EfficiencyCafe from './EfficiencyCafe'

const Cafe = () => {
  return (
    <Layout>
        <div>
            <MainCafe />
            <DoCafe />
            <EfficiencyCafe />
        </div>
    </Layout>
  )
}

export default Cafe