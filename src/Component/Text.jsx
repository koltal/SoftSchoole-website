

export const NormalHeading = ({text, className}) => {
    return (
       <p className={`text-[24px] sm:text-[18px] text-[black] font-bold ${className}`}>{text}</p>
    )
}

export const LighterText = ({text, className}) => {
    return (
       <p className={`text-[14px] text-gray-500 ${className}`}>{text}</p>
    )
}

export const NormalText = ({text, className}) => {
    return (
       <p className={`text-[16px] ${className}`}>{text}</p>
    )
}

export const BigHeading = ({text, className}) => {
    return (
       <p className={`text-[32px] sm:text-[20px] text-[black] font-bold ${className}`}>{text}</p>
    )
}
