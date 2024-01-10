import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { cn } from "../lib/utils";

const Layout = ({ children, className = "", withoutFooter = false }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <Header />

      <div className="mt-20 sm:mt-10">{children}</div>

      <Footer withoutFooter={withoutFooter} />
    </div>
  );
};

export default Layout;
