import React from "react";
interface Props {
  title: string;
  desc: string;
}
const PageHead: React.FC<Props> = ({ title, desc }) => {
  // const currentLoc = window.location.pathname;
 
 
  return (
    <div className="text-center text-white mb-16">
      <span className="px-4 py-1 bg-gray-800 rounded-full text-gray-300">Home</span> 
      <h2 className="text-2xl md:text-4xl text-center font-bold my-4">{title}</h2>
      <p className="md:w-1/5 mx-auto">{desc}</p>
    </div>
  );
};

export default PageHead;
