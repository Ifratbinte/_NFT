import Newsletter from "#/components/common/Newsletter";
import account, { AccountInterface } from "#/components/instance/account";
import marketPlace, { MarketInterface } from "#/components/instance/marketplace";
import List from "#components/common/List";
import SocialIcon from "#components/common/Social";
import footerData from "#mocks/footer.json";
import FooterBottom from "./footerBottom";

const index = () => {
  const footer = footerData.footer;
  return (
    <>
      <div className="container mx-auto section-gap-s ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14 py-4">
          <div className="lg:w-4/12 w-full px-3 lg:px-0 text-center lg:text-left">
            <img src={footer.logo} alt="" className="mx-auto lg:ml-0 lg:mr-0"/>
            <div className="my-8 lg:w-5/6 md:2/3 ">
              <p className="text-paragraph font-DmSans">{footer.content}</p>
            </div>
            <SocialIcon />
          </div>
          <div className="lg:w-2/12">
            <h5 className="text-xl font-DmSans font-bold mb-8">{footer.market_title}</h5>
            <ul>
              {marketPlace.map((item: MarketInterface, i: number) => {
                return <List key={i} title={item.title} path={item.path} />;
              })}
            </ul>
          </div>
          <div className="lg:w-2/12">
            <h5 className="text-xl font-DmSans font-bold mb-8">{footer.acc_title}</h5>
            <ul>
              {account.map((item: AccountInterface, i: number) => {
                return <List key={i} title={item.title} />;
              })}
            </ul>
          </div>
          <div className="lg:w-4/12 w-2/3 text-center lg:text-left">
            <h5 className="text-xl font-DmSans font-bold mb-8">{footer.newsletter}</h5>
            <div className="my-8 lg:w-5/6">
              <p className="text-gray-800 font-DmSans">{footer.newsletter_content}</p>
            </div>
            <Newsletter btn={footer.subscribe} />
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default index;
