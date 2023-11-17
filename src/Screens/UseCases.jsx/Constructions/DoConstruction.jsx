import do2 from '../../../Assets/Usecase/usecaseDo2.png'
import do4 from '../../../Assets/Usecase/usecasdeDo4.png'
import do3 from '../../../Assets/Usecase/usecaseDo3.png'

import Do from "../Do"



const DoConstruction = () => {
  return (

        <Do 
            title={'What you can do'}
            text={'With a  multiple features medical institutions can carry out activities using NitroServe on a day to day basis  to achieve it’s goals'}
            cardList={[
                {
                    title:'Shift creation',
                    text: 'Create and manage shifts for different employees',
                    pic: do2
                },
                {
                    title: 'Swap shifts',
                    text: 'Swap shifts between team members',
                    pic: do3
                },
                {
                    title: 'Messaging',
                    text: 'You can communicate with team members easily',
                    pic: do4
                }
            ]}
        />
       

  )
}

export default DoConstruction

