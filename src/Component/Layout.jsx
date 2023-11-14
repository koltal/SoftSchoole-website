
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({children, className=''}) => {
  return (
    <div className={`flex flex-col ${className}`}>
        <Header/>
        

          {children}

        <Footer/>
    </div>
  )
}

export default Layout