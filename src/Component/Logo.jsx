import logo from '../Assets/SoftSchooleNewLogo.png'

const Logo = ({className}) => {
  return (
    <div  className={`${className}`}>
      <img 
          src={logo} 
          alt="logo" 
          className='h-[60px]'
      />

    </div>
  )
}

export default Logo