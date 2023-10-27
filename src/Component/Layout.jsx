
import Header from "./Header/Header"

const Layout = ({children, className=''}) => {
  return (
    <div className={`flex flex-col ${className}`}>
        <Header/>
        

          {children}

        <div>Footer</div>
    </div>
  )
}

export default Layout