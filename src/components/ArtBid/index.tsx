import AuthBid from "#components/common/AuthBid";
import artBidData from "#mocks/artBid.json";
import BidImage from "../common/BidImg";

const ArtBid = () => {
  const artBid = artBidData.art_bid;
  return (
    <div className="container mx-auto section-gap">
      <div className="flex gap-10">
        <div className="lg:w-1/3">
          <div>
            <img src={artBid.img} alt="" />
          </div>
          <AuthBid author={artBid.author} author_name={artBid.author_name} stock={artBid.stock} bid_title={artBid.bid_title} bid_amount={artBid.bid_amount} />
        </div>
        <div className="lg:w-1/3 border-r">
          {artBid.bid_item.map((item:any, i:number) => {
            return <BidImage 
              key={i} 
              image={item.img} 
              author_name={item.author_name} 
              author={item.author} 
              bid_amount={item.bid_amount} 
              stock={item.stock} 
              btn={item.btn}
            />
          })}
        </div>
        <div className="lg:w-1/3">
          <h4 className="text-2xl font-integralCF">{artBid.collection_title}</h4>
          <span className="text-primary">{artBid.days}</span>
          {
            artBid.collection.map((collection:any, i:number)=> {
              return(
                <></>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ArtBid;
