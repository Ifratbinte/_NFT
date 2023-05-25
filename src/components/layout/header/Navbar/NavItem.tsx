import Link from "next/link";
import React from "react";
import { NavInterface } from "./MenuItems";

interface Props {
  item: NavInterface;
}

const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="list unstyled px-0 py-2 lg:py-0 lg:px-6">
      <Link className="flex items-center font-poppins font-medium text-md hover:text-primary text-gray-800" href={item.path}>
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
