import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/Logo1.png";
import userImg from "../../assets/images/user.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/courts", display: "Find a Court" },
  { path: "/services", display: "AboutUs" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleStickyHeader);
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>

          {/* Navigation */}
          <div className="navigation md:flex hidden">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Right */}
          <div className="flex items-center gap-4">
            {/* User Profile */}
            <div className="hidden">
            <Link to="/">
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden">
                <img src={userImg} className="w-full rounded-full" alt="User Profile" />
              </figure>
            </Link>
            </div>
            {/* Login Button */}
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
                flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`mobile-menu fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
          menuOpen ? "show__menu" : "hidden"
        }`}
      >
        <div className="menu bg-white w-64 p-4 rounded-lg shadow-lg flex flex-col gap-4 text-center">
          {/* Close Button */}
          <button className="absolute top-5 right-5 text-xl" onClick={toggleMenu}>
            <AiOutlineClose />
          </button>
          {navLinks.map((link, index) => (
            <li key={index} className="list-none">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryColor text-[18px] font-[600]"
                    : "text-textColor text-[18px] font-[500] hover:text-primaryColor"
                }
                onClick={toggleMenu} // Close menu on click
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
