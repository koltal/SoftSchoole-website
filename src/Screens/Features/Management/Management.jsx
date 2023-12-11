import React from 'react'
import Layout from '../../../Component/Layout'
import Main from './Main'
import Tools from '../Tools'
import Work from './Work'
import Questions from '../../../Component/Questions'
import mobileIcon from '../../../Assets/Features/tools-mobile.png'
import EasyIcon from '../../../Assets/Features/tools-easy.png'
import FlexibleIcon from '../../../Assets/Features/tools-flexible.png'


const toolList = [
    {
        title: 'On your mobile device',
        text: 'NitroServe is on your mobile device so you can  and always be up to speed',
        icon: mobileIcon
    },

    {
        title: 'Easy set up',
        text: 'Create and manage your schedule seamlessly with the help of the intuitive ui on NitroServe',
        icon: EasyIcon

    },

    {
        title: 'Flexible control',
        text: 'NitroServe is built to carter to the needs of different teams ',
        icon: FlexibleIcon

    }
]

const Management = () => {
  return (
    <Layout>
        <div>
            <Main />

            <Tools 
                title={'All tools you need for your team'}
                list={toolList}
            />

            <Work />
            <Questions />
        </div>

    </Layout>
  )
}

export default Management