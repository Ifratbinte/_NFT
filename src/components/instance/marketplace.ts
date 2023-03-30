export interface MarketInterface {
    id: number;
    title: string;
    path:string
  }
  
  const MarketPlace: MarketInterface[] = [
    {
      id: 1,
      title: "All NFTs",
      path: "@#"
    },
    {
      id: 2,
      title: "New",
      path: "@#"
    },
    {
      id: 3,
      title: "Art",
      path: "@#"
    },
    {
      id: 4,
      title: "Sports",
      path: "@#"
    },
    {
      id: 5,
      title: "Utility",
      path: "@#"
    },
    {
      id: 6,
      title: "Music",
      path: "@#"
    },
    {
      id: 7,
      title: "Domain Name",
      path: "@#"
    },
  ];
  export default MarketPlace;
  