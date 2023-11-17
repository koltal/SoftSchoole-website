import do1 from '../../../Assets/Usecase/usecaseDo1.png'
import do5 from '../../../Assets/Usecase/usecaseDo5.png'
import do3 from '../../../Assets/Usecase/usecaseDo3.png'

import Do from "../Do"



const DoMedical = () => {
  return (

        <Do 
            title={'What you can do'}
            text={'With a  multiple features medical institutions can carry out activities using NitroServe on a day to day basis  to achieve it’s goals'}
            cardList={[
                {
                    title:'Shift creation',
                    text: 'Create and manage shifts for different employees',
                    pic: do1
                },
                {
                    title: 'Swap shifts',
                    text: 'Swap shifts between team members',
                    pic: do5
                },
                {
                    title: 'Messaging',
                    text: 'You can communicate with team members easily',
                    pic: do3
                }
            ]}
        />
       

  )
}

export default DoMedical

