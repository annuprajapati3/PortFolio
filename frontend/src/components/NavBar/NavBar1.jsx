import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar1 = () => {
  const items = ["Home", "About", "Skills", "Projects", "Contact"];
  const [activeState, selectedState] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <div className="bg-[#4F46E5] h-12 w-12 rounded-full flex justify-center items-center transition-all duration-300">
            <p className="font-bold text-white text-xl">AP</p>
          </div>
          <p className="text-2xl font-bold text-black">ANNU PRAJAPATI</p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-7">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => selectedState(item)}
                className={`text-lg font-semibold cursor-pointer transition duration-300 ease-in-out ${
                  activeState === item ? "text-[#4F46E5]" : "text-black"
                } hover:text-[#4F46E5]`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FiX className="text-2xl text-[#4F46E5] transition-transform duration-300" />
            ) : (
              <FiMenu className="text-2xl text-[#4F46E5] transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed w-full top-16 left-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    selectedState(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-semibold cursor-pointer transition duration-300 ease-in-out ${
                    activeState === item ? "text-[#4F46E5]" : "text-black"
                  } hover:text-[#4F46E5]`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar1;
