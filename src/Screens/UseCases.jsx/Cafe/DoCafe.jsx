import do2 from '../../../Assets/Usecase/usecaseDo2.png'
import do5 from '../../../Assets/Usecase/usecaseDo5.png'

import Do from "../Do"



const DoCafe = () => {
  return (

        <Do 
            title={'What you can do'}
            text={'With a  multiple features medical institutions can carry out activities using NitroServe on a day to day basis  to achieve it’s goals'}
            cardList={[
                {
                    title:'Manage workers',
                    text: 'Ensure availability of workers for different times',
                    pic: do2
                },
                {
                    title: 'Task management',
                    text: 'Create and manage shifts for different employees',
                    pic: do2
                },
                {
                    title: 'Swap shifts',
                    text: 'Swap shifts between team members',
                    pic: do5
                }
            ]}
        />
       

  )
}

export default DoCafe

