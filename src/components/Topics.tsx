const Topics = () => {
  return (
    <div className="w-full mb-5 md:w-1/2 lg:w-full">
      <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">
        Popular News
      </h5>
      <ul>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-transparent hover:border-gray-200 transition-all duration-300 ease-linear">
          <a className="dark:text-slate-400 flex items-center text-gray-600" href="#">
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"></span>
            Vue
            <span className="dark:text-slate-400 text-gray-500 ml-auto">25 articles</span>
          </a>
        </li>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-transparent hover:border-gray-200 transition-all duration-300 ease-linear">
          <a className="dark:text-slate-400 flex items-center text-gray-600" href="#">
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to-orange-700"></span>
            Svelte
            <span className="dark:text-slate-400 text-gray-500 ml-auto">18 articles</span>
          </a>
        </li>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-transparent hover:border-gray-200 transition-all duration-300 ease-linear">
          <a className="dark:text-slate-400 flex items-center text-gray-600" href="#">
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to-red-700"></span>
            Angular
            <span className="dark:text-slate-400 text-gray-500 ml-auto">12 articles</span>
          </a>
        </li>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-transparent hover:border-gray-200 transition-all duration-300 ease-linear">
          <a className="dark:text-slate-400 flex items-center text-gray-600" href="#">
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to-blue-700"></span>
            React
            <span className="dark:text-slate-400 text-gray-500 ml-auto">30 articles</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topics;