import { default as DarkMode } from "#/components/Button/btnDarkMode";
import Search from "#/components/Forms/Search";
import { default as ButtonPrimary } from "#components/Button/btnPrimary";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import Navigation from "./NavComponent";
import styles from "./menu.module.css";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="header">
      <div className="container mx-auto py-5 px-2 lg:px-0">
        <div className=" flex items-center justify-between">
          <div className="flex items-baseline justify-between">
            <div className="logo">
              <img src="./images/logo/logo.png" alt="" />
            </div>
            <div className={`${styles.header_menu} ${isVisible ? styles.responsive_menu : ""}`}>
              <button onClick={() => setIsVisible((prevState) => !prevState)} className="lg:hidden">
                <FaArrowAltCircleLeft className="text-2xl lg:relative absolute top-4 right-4 text-primary" />
              </button>
              <img src="./images/logo/logo.png" alt="" className="mb-5 lg:hidden block" />
              <Navigation />
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:gap-4 xl:gap-3 hidden">
            <Search />
            <ButtonPrimary btn_name="Connect Wallet" />
            <DarkMode btn_name={<BsMoonStarsFill />} />
          </div>
          <button className="btn visible lg:hidden" onClick={() => setIsVisible((prevState) => !prevState)}>
            <FiAlignRight className="text-2xl lg:relative text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
