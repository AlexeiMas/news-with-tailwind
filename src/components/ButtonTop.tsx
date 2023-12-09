import {ButtonHTMLAttributes, useEffect, useState} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional props you want to pass
  // ...
}

const ButtonTop = ({...props}: ButtonProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    // Show the button when the user has scrolled down 120% of the screen height
    const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
    setIsVisible(scrollPercentage > 120);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={scrollToTop}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
           className="w-6 h-6 animate-pulse">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"/>
      </svg>
    </button>
  );
};

export default ButtonTop;