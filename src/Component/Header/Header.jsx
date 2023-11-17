
import Logo from "../Logo"
import Nav from "../Nav/Nav"
import Button from "../Forms/Button"
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  return (

    <div className="bg-white">

        <div className="flex justify-between items-center px-16 sm:px-2 sm:pr-4 h-16">
            <Link to={'/'}>
              <Logo/>
            </Link>

            <Nav/>

            <div className="flex gap-3 sm:hidden">
              <Link to={'https://app.nitroserve.co'}>
                <Button text='Log in'
                />
              </Link>

              <Link to={'https://app.nitroserve.co/signup'}>
                <Button text='Sign up' type="outline"
                />

              </Link>
            </div>

            <TbMenu2 className="hidden sm:block" size={28}/>
        </div>
        <div className="h-8 sm:hidden"/>

    </div>
  )
}

export default Header