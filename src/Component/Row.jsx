const Row = ({children, className}) => {
    return (
        <div className={`flex justify-between w-full ${className}`}>
            {children[0]}
            {children[1]}
        </div>
    )
}


export default Row