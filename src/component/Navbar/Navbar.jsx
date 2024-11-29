// import { useState } from "react";
// import { useCart } from "../../store/Store";
// import { Link, NavLink } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import SlidingCart from "./SlidingCart";
// import "./Navbar.css";

// function Navbar() {
//   const [showCart, setShowCart] = useState(false);

//   function toggleShowCart() {
//     setShowCart(!showCart);
//   }
//   return (
//     <header className={`header ${showCart ? "visible" : ""}`}>
//       <Navigations toggleShowCart={toggleShowCart} />
//       <SlidingCart toggleShowCart={toggleShowCart} />
//       <CartSliderOverlay />
//     </header>
//   );
// }

// function CartButton({ toggleShowCart }) {
//   const cart = useCart();

//   const totalCartQty = cart.reduce((totalQty, current) => {
//     return totalQty + current.qty;
//   }, 0);

//   return (
//     <span onClick={toggleShowCart} className="cart-icon">
//       <ShoppingCart size={22} />
//       <div className="cart-counter">{totalCartQty}</div>
//     </span>
//   );
// }

// function Navigations({ toggleShowCart }) {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   function handleOpenNavigation() {
//     setIsNavOpen(!isNavOpen);
//   }

//   const handleSignup = () => {
//     console.log("signup button clicked");
//   };
//   const handleLogin = () => {
//     console.log("login button clicked");
//   };
//   return (
//     <nav className={`nav container ${isNavOpen ? "nav-open" : ""}`}>
//       <span className="brand-name">
//         <Link to="/">Shoplux</Link>
//       </span>
//       <ul className="nav-link_container">
//         <li className="nav-link">
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li className="nav-link">
//           <NavLink to="/explore/men">Men</NavLink>
//         </li>
//         <li className="nav-link">
//           <NavLink to="/explore/women">Women</NavLink>
//         </li>
//         <li className="nav-link">
//           <NavLink to="/feedback">Feedback</NavLink>
//         </li>
//         <li className="nav-link">
//           <NavLink to="/explore/all">Explore All</NavLink>
//         </li>

//         <li
//           onClick={handleLogin}
//           className=" justify-center items-center text-center font-bold mt-2 pt-2  lg:hidden block "
//         >
//           <NavLink to="/login">Login</NavLink>
//         </li>
//         <li
//           onClick={handleSignup}
//           className="justify-center items-center text-center font-bold pt-12  lg:hidden block "
//         >
//           <NavLink to="/signup">SignUp</NavLink>
//         </li>
//       </ul>
//       <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       {/* login signup  */}
//       <div className="flex gap-4 ">
//         <li
//           onClick={handleLogin}
//           className="nav-link bg-yellow-700 p-2 rounded-lg hidden lg:block "
//         >
//           <NavLink to="/login">Login</NavLink>
//         </li>
//         <li
//           onClick={handleSignup}
//           className="nav-link bg-yellow-700 p-2 rounded-lg hidden lg:block "
//         >
//           <NavLink to="/signup">SignUp</NavLink>
//         </li>
//       </div>

//       <div className="nav-secondary">
//         <CartButton toggleShowCart={toggleShowCart} />
//       </div>
//       <div className="nav-overlay"></div>
//     </nav>
//   );
// }

// function CartSliderOverlay() {
//   return <div className="cart-slide_overlay"></div>;
// }

// export default Navbar;

// new
import { useState, useEffect } from "react";
import { useCart } from "../../store/Store";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SlidingCart from "./SlidingCart";
import "./Navbar.css";

function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  function toggleShowCart() {
    setShowCart(!showCart);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setUser(null); // Reset the user state after logout
  }

  return (
    <header className={`header ${showCart ? "visible" : ""}`}>
      <Navigations
        toggleShowCart={toggleShowCart}
        user={user}
        handleLogout={handleLogout}
      />
      <SlidingCart toggleShowCart={toggleShowCart} />
      <CartSliderOverlay />
    </header>
  );
}

function CartButton({ toggleShowCart }) {
  const cart = useCart();

  const totalCartQty = cart.reduce((totalQty, current) => {
    return totalQty + current.qty;
  }, 0);

  return (
    <span onClick={toggleShowCart} className="cart-icon">
      <ShoppingCart size={22} />
      <div className="cart-counter">{totalCartQty}</div>
    </span>
  );
}

function Navigations({ toggleShowCart, user, handleLogout }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleOpenNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  const handleSignup = () => {
    console.log("signup button clicked");
  };
  const handleLogin = () => {
    console.log("login button clicked");
  };

  return (
    <nav className={`nav container ${isNavOpen ? "nav-open" : ""}`}>
      <span className="brand-name">
        <Link to="">Shoplux</Link>
      </span>
      <ul className="nav-link_container">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/men">Men</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/women">Women</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/all">Explore All</NavLink>
        </li>

        {/* Show Login/Signup buttons if not logged in */}
        {!user ? (
          <>
            <li
              onClick={handleLogin}
              className=" justify-center items-center text-center font-bold mt-2 pt-2  lg:hidden block "
            >
              <NavLink to="/login">Login</NavLink>
            </li>
            <li
              onClick={handleSignup}
              className="justify-center items-center text-center font-bold pt-12  lg:hidden block "
            >
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </>
        ) : (
          // Show username and logout button if logged in
          <li className="nav-link">
            <span className="text-yellow-600  ">Hey ! {user}</span>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-black py-1 px-4 rounded"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
      <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* login signup  */}
      <div className="flex gap-4 ">
        {!user && (
          <>
            <li
              onClick={handleLogin}
              className="nav-link bg-yellow-700 p-2 rounded-lg hidden lg:block "
            >
              <NavLink to="/login">Login</NavLink>
            </li>
            <li
              onClick={handleSignup}
              className="nav-link bg-yellow-700 p-2 rounded-lg hidden lg:block "
            >
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </>
        )}
      </div>

      <div className="nav-secondary">
        <CartButton toggleShowCart={toggleShowCart} />
      </div>
      <div className="nav-overlay"></div>
    </nav>
  );
}

function CartSliderOverlay() {
  return <div className="cart-slide_overlay"></div>;
}

export default Navbar;
