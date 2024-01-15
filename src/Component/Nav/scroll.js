import { animateScroll as scroll } from "react-scroll";
const handleScrollToTop = () => {
  scroll.scrollToTop({
    duration: 500, // Set the duration of the scroll animation
    smooth: "easeInOutQuart", // Set the easing function for the animation
  });
};

export default handleScrollToTop;
