const Filter = () => {
  return (
    <div className="container mx-auto">
      <div className="relative shadow-cardShadow bg-white px-10 pt-8 pb-12 rounded-xl -mt-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="filter-container">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <select
              id="category"
              name="category-list"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 "
            >
              <option value="">-- Select One --</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="filter-container">
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tags
            </label>
            <select
              id="tags"
              name="tags-list"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 "
            >
              <option value="">-- Select One --</option>
              <option value="frontend">React</option>
              <option value="backend">TypeScript</option>
              <option value="marketing">Java</option>
              <option value="marketing">Python</option>
              <option value="marketing">Php</option>
            </select>
          </div>
          <div className="filter-container">
            <label htmlFor="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Level
            </label>
            <select
              id="level"
              name="level-list"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 "
            >
              <option value="">-- Select One --</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
