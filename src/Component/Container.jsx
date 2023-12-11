
const Container = ({children, className=''}) => {
  return (
    <div className={`px-20 2xl:px-36 sm:px-4 pt-12 pb-6 ${className}`}>
        {children}
    </div>
  )
}

export default Container