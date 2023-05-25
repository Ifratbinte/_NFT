import styles from "#styles/home.module.css";
import React from "react";
interface Props {
  logo: string;
}
const Partners: React.FC<Props> = ({ logo }) => {
  return (
    <div
      className={`${styles.partners} border-b border-b-slate-200 border-r border-r-slate-200 min-h-[150px] cursor-pointer grayscale hover:grayscale-0 flex items-center`}
    >
      <img src={logo} alt="Partners" className="max-w-[150px] max-h-[50px] mx-auto" />
    </div>
  );
};

export default Partners;
