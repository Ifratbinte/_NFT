import Link from "next/link";
import React from "react";
import { NavInterface } from "./MenuItems";

interface Props {
  item: NavInterface;
}

const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="list unstyled py-2 lg:px-3 xl:px-7">
      <Link className="flex items-center font-DmSans font-medium text-lg hover:text-primary  text-black" href="#">
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
