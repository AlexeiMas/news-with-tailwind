const ContentBlock = () => {
  return (
    <div className="w-full mb-5 md:w-2/5">
      <h6 className="dark:text-white font-semibold text-gray-700 mb-3">Content</h6>
      <ul>
        <li>
          <a
            className="footer-link"
            href="#"
          >Block</a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >Policy</a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >Documentation</a>
        </li>
      </ul>
    </div>
  );
};

export default ContentBlock;