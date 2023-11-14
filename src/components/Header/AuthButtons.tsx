const AuthButtons = () => {
  return (
    <ul className="inline-flex items-center gap-2 ml-2">
      <li>
        <button
          className="header-btn delay-150">Login
        </button>
      </li>
      <li>
        <button
          // className="shadow-md shadow-indigo-600" - bottom shadow in tw v.3+
          className="header-btn">Register
        </button>
      </li>
    </ul>
  );
};

export default AuthButtons;