import AuthBid from "#components/common/AuthBid";
import artBidData from "#mocks/artBid.json";
import BidImage from "../../common/BidImg";
import TopCollection from "../../common/TopCollection";

const ArtBid = () => {
  const artBid = artBidData.art_bid;
  return (
    <div className="container mx-auto md:section-gap section-gap-s">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        <div>
          <div className="sm:w-2/3 md:w-full mx-auto">
            <img src={artBid.img} alt="" />
          </div>
          <AuthBid author={artBid.author} author_name={artBid.author_name} stock={artBid.stock} bid_title={artBid.bid_title} bid_amount={artBid.bid_amount} />
        </div>
        <div className="sm:w-2/3 md:w-full mx-auto">
          {artBid.bid_item.map((item: any, i: number) => {
            return (
              <BidImage
                key={i}
                image={item.img}
                author_name={item.author_name}
                author={item.author}
                bid_amount={item.bid_amount}
                stock={item.stock}
                btn={item.btn}
              />
            );
          })}
        </div>
        <div className="text-center lg:text-left">
          <h4 className="text-xl md:text-2xl font-integralCF mb-2">{artBid.collection_title}</h4>
          <span className="text-primary font-semibold">{artBid.days}</span>
          <div className="mt-3 sm:w-2/3 md:w-full mx-auto">
            {artBid.collection.map((collection: any, i: number) => {
              return (
                <TopCollection
                  key={i}
                  id={collection.id}
                  image={collection.image}
                  verify_badge={collection.verify}
                  title={collection.title}
                  amount={collection.amount}
                  in_sell={collection.in_sell}
                  de_sell={collection.de_sell}
                  isVerify
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtBid;
