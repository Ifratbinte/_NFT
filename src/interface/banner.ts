interface BannerInterface {
  banner: [
    id: number,
    image: string,
    title: string,
    author: string,
    author_name: string,
    badge: {
      title: string;
      bid_price: string;
      ends_time: string;
      bid_hour: string;
    }
  ];
}
export default BannerInterface;
