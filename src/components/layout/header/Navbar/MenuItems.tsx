export interface NavInterface {
  id: number;
  title: string;
  path: string;
}

const NavItems: NavInterface[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Courses",
    path: "/courses",
  },
  {
    id: 3,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Pages",
    path: "/pages",
  },
];
export default NavItems;
