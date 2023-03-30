import SignIndata from "#mocks/signIn.json";
import style from "./signUp.module.css";

const CTA = () => {
  const cta = SignIndata.signin;

  return (
    <div className="container mx-auto section-gap-s my-6">
      <div className="flex items-center gap-10">
        <div className="w-1/2 relative">
          <div className="grid grid-rows-2">
            <div className="relative">
              <div>
                <img src={cta.thumbnail1} alt="" className="" />
              </div>
              <div>
                <img src={cta.person1} alt="" className="absolute left-64 -bottom-6" />
              </div>
            </div>
            <div className={`${style.gridMiddle} relative flex justify-center`}>
              <div>
                <img src={cta.thumbnail2} alt="" className="" />
              </div>
              <div>
                <img src={cta.person2} alt="" className="absolute bottom-24 right-10" />
              </div>
            </div>
          </div>
          <div className={`${style.gridPosition} grid grid-cols-2 absolute`}>
            <div className="relative">
              <div>
                <img src={cta.thumbnail3} alt="" className="" />
              </div>
              <div>
                <img src={cta.person3} alt="" className="absolute -right-8 -bottom-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="font-bold text-4xl font-integralCF w-1/2 mb-8">{cta.title}</h2>
          <p className="text-paragraph font-DmSans text-base pr-32 pb-8">{cta.content}</p>
          <button className="border border-1 border-primary rounded-full px-8 py-3 bg-primary text-white">{cta.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
