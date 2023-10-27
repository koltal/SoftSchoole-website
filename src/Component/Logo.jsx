import logo from '../Assets/nitroServeLogo.png'

const Logo = ({className}) => {
  return (
    <img 
        className={`${className}`}
        src={logo} 
        alt="logo" 
    />
  )
}

export default Logo