
import { useLocation, Link } from "react-router-dom"
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

const Nav = () => {
  return (
    <div className="flex justify-between w-[33%] sm:hidden">
        <NavItem text='Features'/>

        <NavList
          list={[
            {name: 'Medical Institutions', link:'/usecase/medical'}
          ]}
        >
          <NavItem 
            list
            text='Use cases'
            active={'/usecase'}
          />
        </NavList>

        <NavItem text='Contact Us'/>
        <NavItem text='Pricing' active={'/pricing'}/>

    </div>
  )
}

export default Nav


const NavItem = ({text, active, list}) => {
  const{pathname} = useLocation()
  const path = `/${pathname.split('/')[1]}`

    return (

      <Link to={list === undefined && active}>
        <div className="flex flex-col cursor-pointer w-full">
          <div className="text-[16px] font-medium flex items-center gap-1 hover:text-primary">
              <span>{text}</span>
              {list !== undefined && <SlArrowDown className="mt-1" size={12}/>}
          </div>

          <div className={`border-b-[4px] ${path === active ? 'border-primary' : 'border-white'} rounded-sm w-[30%]`}/>

        </div>
      </Link>

    )
}

const NavList = ({children, list}) => {
  const [openPopper, setOpenPopper] = useState(false)
  const [index, setIndex] = useState(null)
  const{pathname} = useLocation()

  return (
    <div 
      onMouseEnter={()=> setOpenPopper(true)}
      onMouseLeave={(event)=> {
        let timeoutId = setTimeout(() => {
          setOpenPopper(false);
          setIndex(null)
        }, 100);
        event.currentTarget.addEventListener(
          'mouseenter',
          () => {
            setOpenPopper(true)
            clearTimeout(timeoutId);
          }
        );
      }}
      className="relative">

      <div >
        {children}
      </div>

      {openPopper && <div 
        className="absolute shadow-shift-shadow-small px-3 py-2 left-0 mt-8 top-0 w-48 bg-white min-h-[50px]">
          {list.map((val,ind)=> (
            <Link key={ind} to={val?.link}>
              <div 
                onMouseEnter={()=> setIndex(ind)}
                onMouseLeave={()=> setIndex(null)}

                className="flex justify-between items-center">
                <p className={`hover:text-primary cursor-pointer ${pathname === val?.link && 'text-primary'}`}>{val?.name}</p>
                <p className={`w-2 h-2 rounded-full ${(index === ind || pathname === val?.link) && 'bg-primary'}`}/>
              </div>
            </Link>

          ))}
      </div>}

    </div>
  )
}