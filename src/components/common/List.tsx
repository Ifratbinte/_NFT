import React from "react";

interface Props {
  title: string;
  path?: string;
}

const List: React.FC<Props> = ({ path, title }) => {
  return (
    <li className="py-2 first:pt-0 last:pb-0 text-center lg:text-left">
      <a href={path} className="text-md font-medium font-DmSans">
        {title}
      </a>
    </li>
  );
};

export default List;
