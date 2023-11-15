import { useState } from "react"

const Toggle = () => {
    const [toggle, setToggle] = useState('month') // month || year

  return (
    <div className="border-1 w-[162px] h-[46px] rounded-md bg-[#E8EDED] p-1 flex">

       <Item 
            text={'Monthly'}
            active={'month'}
            toggle={toggle}
            handleClick={()=> setToggle('month')}
        />

        <Item 
            text={'Yearly'}
            active={'year'}
            toggle={toggle}
            handleClick={()=> setToggle('year')}
        />

    </div>
  )
}

export default Toggle


const Item = ({text, active, toggle, handleClick}) => {
    return(
        <div 
            onClick={handleClick}
            className={`w-[50%] text-[14px] ${active === toggle && 'bg-white'} flex justify-center items-center font-semibold cursor-pointer rounded-md`}>
            {text}
        </div>
    )
}