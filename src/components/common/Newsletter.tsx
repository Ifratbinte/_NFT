import React from "react";
interface Props {
  btn: string;
}

const Newsletter: React.FC<Props> = ({ btn }) => {
  return (
    <div className="justify-center md:flex">
      <form className="flex items-center w-full bg-white border rounded-full relative">
        <input className="outline-none appearance-none focus:outline-none active:outline-none py-5 ml-6" placeholder="Enter your email address." />
        <button type="submit" className="border rounded-full px-5 py-3 absolute right-1 bg-blue text-white font-semibold font-DmSans">
          {btn}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
