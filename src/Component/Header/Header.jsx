
import Logo from "../Logo"
import Nav from "../Nav/Nav"
import Button from "../Forms/Button"

const Header = () => {
  return (

    <div className="bg-white">

        <div className="flex justify-between items-center px-16 h-16">
            <Logo/>

            <Nav/>

            <div className="flex gap-3">
                <Button text='Log in'/>
                <Button text='Sign up' type="outline"/>
            </div>
        </div>
        <div className="h-8"/>

    </div>
  )
}

export default Header