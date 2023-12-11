import Row from "../../Component/Row"
import { NormalHeading, NormalText } from "../../Component/Text"


const ShowCase = ({title, text, image, className, imageClassName}) => {
    return(
        <Row className={`${className}`}>
            <div className=" flex flex-col justify-center gap-4 w-[50%] sm:w-full">
                <NormalHeading 
                    text={title}
                    className={'!text-[#606665] leading-6 w-[50%]'}
                />

                <NormalText 
                    text={text}
                    className={'!text-[14px] !text-black w-[80%]'}
                />

            </div>

            <div className={`w-[50%] flex justify-end ${imageClassName}`}>
                <img src={image} alt="" />
            </div>
    </Row>
    )
}

export default ShowCase