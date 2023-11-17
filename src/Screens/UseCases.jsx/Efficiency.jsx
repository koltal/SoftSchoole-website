import Container from "../../Component/Container"
import Button from "../../Component/Forms/Button"



const Efficiency = ({text, title, cardList}) => {
  return (

    <Container className=" !pt-28 !pb-32">
        <SubHead 
          title={title}
          text={text}
          cardList={cardList}

          handleClick={()=>{}}
        />

    </Container>
  )
}

export default Efficiency


const SubHead = ({cardList, title, text, handleClick}) => {

  return (
    <div className=" flex ">

      <div className="w-[50%] sm:w-full">

          <div className=" flex flex-col gap-4 w-[75%] sm:w-full">
              <p className="text-[32px] sm:text-[18px] font-semibold sm:font-bold text-black-500 leading-[45.18px] sm:leading-6">
                {title}
              </p>
              <p className="text-[16px] sm:text-[14px] sm:w-[90%] text-[#606665]">
                {text}
              </p>
              <Button 
                  withIcon={true}
                  className="!h-[52px] !w-[185px]"
                  text={'Get started now'}
                  onClick={handleClick}

              />


          </div>
      </div>

      <div className="w-[50%] flex flex-wrap justify-between">
        {
          cardList.map((val, index) => (
            <Card 
              title={val?.title}
              icon={val?.icon}
              id={index}
            />

          ))
        }


      </div>
    
  </div>
  )
}


const Card = ({title, icon, id}) =>{

  return (
    <div kex={id} className="border-1 w-[47%] h-[130px] py-3 px-4 text-[16px] font-bold mb-8 rounded-md">
      <img src={icon} alt="" />
      <p className="pl-2">{title}</p>
    </div>
  )
}