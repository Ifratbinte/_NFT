export interface AccountInterface {
    id: number;
    title: string;
  }
  
  const Account: AccountInterface[] = [
    {
      id: 1,
      title: "Profile"
    },
    {
      id: 2,
      title: "Favourite"
    },
    {
      id: 3,
      title: "My Collections"
    },
    {
      id: 4,
      title: "Settings"
    }
  ];
  export default Account;
  