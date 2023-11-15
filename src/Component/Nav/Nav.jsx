
import { useLocation, Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex justify-between w-[33%] sm:hidden">
        <NavItem text='Features'/>
        <NavItem text='Use cases'/>
        <NavItem text='Contact Us'/>
        <NavItem text='Pricing' active={'/pricing'}/>

    </div>
  )
}

export default Nav


const NavItem = ({text, active}) => {
  const{pathname} = useLocation()
  const path = `/${pathname.split('/')[1]}`

    return (

      <Link to={active}>
        <div className="flex flex-col cursor-pointer w-full">
          <div className="text-[16px] font-medium hover:text-primary">
              {text}
          </div>

          <div className={`border-b-[4px] ${path === active ? 'border-primary' : 'border-white'} rounded-sm w-[30%]`}/>

        </div>
      </Link>

    )
}