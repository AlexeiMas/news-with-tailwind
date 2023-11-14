const Banners = () => {
  return (
    <section className="mx-2 lg:flex lg:space-x-2">
      <a
        // "bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 hover:via-purple-500/100"
        className="w-full lg:w-2/3 bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
        href="#"
      >
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"/>
        <img
          className="absolute top-0 left-0 w-full h-full z-0 object-cover"
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="news"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            Lorem ipsum dolor sit amet, consectetur.
          </h2>
          <span className="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2 rounded">React</span>
          <div className="flex mt-3">
            <img className="h-10 w-10 rounded-full mr-2 object-cover" src="https://randomuser.me/api/portraits/women/58.jpg" alt="author"/>
            <div>
              <p className="font-semibold text-gray-200 text-sm">Jannet Smith</p>
              <time className="text-gray-400 text-xs">10 November</time>
            </div>
          </div>
        </div>
      </a>
      <a className="w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden" href="#">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"/>
        <img
          className="absolute top-0 left-0 w-full h-full z-0 object-cover"
          src="https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="news"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            Lorem ipsum dolor sit amet, consectetur.
          </h2>
          <span className="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2 rounded">Angular</span>
          <div className="flex mt-3">
            <img className="h-10 w-10 rounded-full mr-2 object-cover" src="https://randomuser.me/api/portraits/women/77.jpg" alt="author"/>
            <div>
              <p className="font-semibold text-gray-200 text-sm">Josee James</p>
              <time className="text-gray-400 text-xs">15 November</time>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Banners;