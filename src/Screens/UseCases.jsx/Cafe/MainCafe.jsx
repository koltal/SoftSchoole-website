import pic from "../../../Assets/Usecase/cafeMain.png";
import mobilePic from "../../../Assets/Usecase/cafeMainMobile.png";

import Main from "../Main";

const MainCafe = () => {
  return (
    <Main
      mainPic={pic}
      mobilePic={mobilePic}
      title={"Cafe’s and Restaurants"}
      text={
        "With NitroServe’s shift scheduling and management system, it is easy and flexible to manage the schedules of medical practitioners"
      }
    />
  );
};

export default MainCafe;
