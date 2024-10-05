import { LuShoppingBasket } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md"; // Import the close icon
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const seeMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className="h-full w-full fixed duration-500 z-[9999] transition-all lg:hidden top-0 left-0"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="h-[580px] w-[350px] bg-slate-100 absolute duration-[300ms]"
          style={{ right: toggle ? "0%" : "-50%" }}
        >
          <div className="mt-[30%] font-mono text-3xl">
            <ul className="flex flex-col items-center gap-10">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/fruits">
                <li>Fruits</li>
              </Link>
              <Link to="/aboutus">
                <li>About Us</li>
              </Link>
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
              <Link to="/cart">
                <li>
                  <LuShoppingBasket className="text-4xl" />
                </li>
              </Link>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="w-full h-16 top-0 left-0 font-mono z-[9999] text-2xl fixed bg-white ">
        <nav className="flex items-center justify-between p-4 shadow-xl">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <h1 className="font-bold text-2xl text-lime-800 tracking-wider uppercase">
                Organic
              </h1>
            </Link>
          </div>

          {/* Nav links for large screens */}
          <ul className="lg:flex items-center justify-center gap-6 hidden">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/fruits">
              <li>Fruits</li>
            </Link>
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/cart">
              <li>
                <LuShoppingBasket className="text-2xl" />
              </li>
            </Link>
          </ul>

          {/* Login button for large screens */}
          <div className="lg:flex hidden">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>

          {/* Menu icon for small screens */}
          <div className="lg:hidden">
            {toggle ? (
              <MdOutlineClose className="text-2xl" onClick={seeMenu} />
            ) : (
              <MdOutlineMenu className="text-2xl" onClick={seeMenu} />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
