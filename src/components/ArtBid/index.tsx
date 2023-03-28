import AuthBid from "#components/common/AuthBid";
import artBidData from "#mocks/artBid.json";

const ArtBid = () => {
  const artBid = artBidData.art_bid;
  return (
    <div className="container mx-auto section-gap">
      <div className="flex">
        <div className="lg:w-1/3">
          <div>
            <img src={artBid.img} alt="" />
          </div>
          <AuthBid author={artBid.author} author_name={artBid.author_name} stock={artBid.stock} bid_title={artBid.bid_title} bid_amount={artBid.bid_amount} />
        </div>
        <div className="lg:w-1/3"></div>
        <div className="lg:w-1/3"></div>
      </div>
    </div>
  );
};

export default ArtBid;
