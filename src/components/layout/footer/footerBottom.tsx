import React from "react";

const footerBottom = () => {
  return (
    <div className="border border-t">
      <div className="container mx-auto py-4">
        <div className="text-gray-400 flex justify-center">Copyright @ {new Date().getFullYear()} <span className="ml-2 text-black">disten</span></div>
      </div>
    </div>
  );
};

export default footerBottom;


