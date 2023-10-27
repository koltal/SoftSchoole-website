
const Nav = () => {
  return (
    <div className="flex justify-between w-[33%]">
        <NavItem text='Features'/>
        <NavItem text='Use cases'/>
        <NavItem text='Contact Us'/>
        <NavItem text='Pricing'/>

    </div>
  )
}

export default Nav


const NavItem = ({text}) => {

    return (
        <div className="text-[16px] font-medium">
            {text}
        </div>
    )
}