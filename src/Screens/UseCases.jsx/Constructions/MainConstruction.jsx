import pic from "../../../Assets/Usecase/constructionMain.png";
import mobilePic from "../../../Assets/Usecase/constructionMainMobile.png";

import Main from "../Main";

const MainConstruction = () => {
  return (
    <Main
      mainPic={pic}
      mobilePic={mobilePic}
      title={"Construction teams"}
      text={
        "With NitroServe’s shift scheduling and management system, it is easy and flexible to manage the schedules of medical practitioners"
      }
    />
  );
};

export default MainConstruction;
