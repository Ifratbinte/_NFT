export interface NavInterface {
  id: number;
  title: string;
  component?: JSX.Element;
}

const NavItems: NavInterface[] = [
  {
    id: 1,
    title: "Marketplace"
  },
  {
    id: 2,
    title: "Resource"
  },
  {
    id: 3,
    title: "About"
  }
];
export default NavItems;
