import Layout from '../../../Component/Layout'
import MainConstruction from './MainConstruction'
import DoConstruction from './DoConstruction'
import EfficiencyConstruction from './EfficiencyConstruction'

const Construction = () => {
  return (
    <Layout>
        <div>
            <MainConstruction />
            <DoConstruction />
            <EfficiencyConstruction />
        </div>
    </Layout>
  )
}

export default Construction