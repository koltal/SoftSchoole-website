import onBoardingIcon from '../../../Assets/Usecase/onboarding.png'
import flexibilityIcon from '../../../Assets/Usecase/flexibility.png'
import intuitiveIcon from '../../../Assets/Usecase/intuitive.png'
import integrationsIcon from '../../../Assets/Usecase/integrations.png'

import Efficiency from "../Efficiency"


const EfficiencyMedical = () => {
  return (

      <Efficiency
        title={'Team management  for efficiency'}
        text='The  NitroServe application is built for teams
        for the management of schedules and people.
        It is built to promote and efficient work flow for
        big and small teams'

        cardList={[
          {
            title: 'Easy onboarding',
            icon: onBoardingIcon
          },

          {
            title: 'Integrations',
            icon: integrationsIcon
          },

          {
            title: 'Intuitive UI',
            icon: intuitiveIcon
          },


          {
            title: 'Flexibility',
            icon: flexibilityIcon
          }
        ]}
      
      />
       
  )
}

export default EfficiencyMedical


