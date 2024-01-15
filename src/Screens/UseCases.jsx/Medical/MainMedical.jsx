import medPic from "../../../Assets/Usecase/usecase-med.png";
import mobilePic from "../../../Assets/Usecase/medMainMobile.png";

import Main from "../Main";

const MainMedical = () => {
  return (
    <Main
      mainPic={medPic}
      mobilePic={mobilePic}
      title={"Medical Institutions"}
      text={
        "With NitroServe’s shift scheduling and management system, it is easy and flexible to manage the schedules of medical practitioners"
      }
    />
  );
};

export default MainMedical;
