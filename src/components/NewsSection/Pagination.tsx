const Pagination = () => {
  return (
    <div className="mt-20 mb-10">
      <ul className="flex justify-center items-center">
        <li><a className="pagination-item rounded-l-lg" href="#">Previous</a></li>
        <li><a className="pagination-item" href="#">1</a></li>
        <li><a className="pagination-item" href="#">2</a></li>
        <li><a className="pagination-item text-blue-500 hover:bg-blue-100 hover:text-blue-600 bg-gray-100 cursor-default transition-all duration-300 ease-linear" href="#">3</a></li>
        <li><a className="pagination-item" href="#">4</a></li>
        <li><a className="pagination-item" href="#">5</a></li>
        <li><a className="pagination-item rounded-r-lg" href="#">Next</a></li>
      </ul>
    </div>
  );
};

export default Pagination;