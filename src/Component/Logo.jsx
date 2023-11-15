import logo from '../Assets/nitroServeLogo.png'

const Logo = ({className}) => {
  return (
    <div  className={`${className}`}>
      <img 
          src={logo} 
          alt="logo" 
      />

    </div>
  )
}

export default Logo