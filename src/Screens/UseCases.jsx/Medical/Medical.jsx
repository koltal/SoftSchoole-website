import Layout from '../../../Component/Layout'
import MainMedical from './MainMedical'
import DoMedical from './DoMedical'
import EfficiencyMedical from './EfficiencyMedical'

const Medical = () => {
  return (
    <Layout>
        <div>
            <MainMedical />
            <DoMedical />
            <EfficiencyMedical />
        </div>
    </Layout>
  )
}

export default Medical