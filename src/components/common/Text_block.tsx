import React from "react";
interface Props {
  title: string;
  paragraph: string;
  title_style?: string
}

const Banner: React.FC<Props> = ({ title, paragraph, title_style="text-lg" }) => {
  return (
    <>
      <div className={`${title_style} font-bold !leading-tight mb-6`}>{title}</div>
      <div className="text-base-color mb-6">{paragraph}</div>
    </>
  );
};

export default Banner;
