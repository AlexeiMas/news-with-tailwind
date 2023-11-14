const Subscribe = () => {
  return (
    <div className="my-5 md:my-0 lg:my-5">
      <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
      <p className="dark:text-slate-400 text-gray-600 mb-4">Subscribe to our newsletter.</p>
      <input
        placeholder="Your email"
        type="email"
        className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 transition-all duration-300 ease-linear"
      />
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300 ease-linear">Subscribe</button>
    </div>
  );
};

export default Subscribe;