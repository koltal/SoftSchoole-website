import {BsArrowUpRight} from 'react-icons/bs'

const Button = ({text, type='fill', className='', Icon=BsArrowUpRight, withIcon=false, onClick=()=>{}}) => {
  return (

    <>
        {type === 'fill' ? 
            <button 
                onClick={onClick}
                className={`w-[78px] h-[38px] sm:text-[14px] flex justify-center gap-2 items-center bg-primary font-bold text-white rounded-md hover:opacity-50 ${className}`}>
                <p>{text}</p>
                {withIcon && <Icon />}
            </button>: 
            <button 
                onClick={onClick}
                className={`w-[78px] h-[38px] sm:text-[14px] flex justify-center gap-2 items-center border-1 font-bold border-primary text-black rounded-md hover:opacity-50 ${className}`}>
                 <p>{text}</p>
                {withIcon && <Icon />}
            </button>
        }

    </>
  )
}

export default Button