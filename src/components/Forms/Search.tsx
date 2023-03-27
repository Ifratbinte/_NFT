import { FiSearch } from "react-icons/fi";
const search = () => {
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FiSearch className="text-gray-300 text-3xl"/>
        </div>
        <input
          type="search"
          id="menu-search"
          className="block lg:w-52 xl:w-96 py-3 px-5 text-md text-gray-900 rounded-full border focus:border-primary"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
};

export default search;
