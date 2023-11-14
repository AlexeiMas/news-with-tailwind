const Breadcrumbs = () => {
  return (
    <div className="px-2 flex items-center">
      <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center">
        <a className="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300 ease-linear" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
          </svg>
        </a>
        <span className="mx-2 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </span>
        <a className="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300 ease-linear" href="#">News</a>
        <span className="mx-2 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </span>
        <a className="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300 ease-linear" href="#">Tech</a>
      </div>
    </div>
  );
};

export default Breadcrumbs;