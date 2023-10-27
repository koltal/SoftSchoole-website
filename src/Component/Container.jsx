
const Container = ({children, className=''}) => {
  return (
    <div className={`px-20 pt-12 pb-6 ${className}`}>
        {children}
    </div>
  )
}

export default Container