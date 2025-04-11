import { Input } from "antd";
import React from "react";
import { MdFavorite } from "react-icons/md";

function NavBar() {
  const navInfoL = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Communities",
      link: "/communities",
    },

    {
      title: "Contact",
      link: "/contact",
    },
  ];
  const navInfoR = [
    {
      num: 1,
      title: "Favorite",
      link: "/favorite",
    },
    {
      num: 2,
      title: "Login",
      link: "/login",
    },
  ];
  return (
    <div className="nav-bar "style={navbarStyle}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          {navInfoL.map((d, i) => (
            <>
              <div className="m-2" key={i}>
                <a className="nav-link" href={d.link}>
                  {d.title}
                </a>
              </div>
            </>
          ))}
        </div>
        <div className="d-flex">
            <div className="mt-1">
              <Input className="input-box" placeholder="Search..."/>
            </div>
          {navInfoR.map((d, i) => (
            <>
              <div className="m-2" key={i}>
                <a className="nav-link" href={d.link}>
                  {d.num === 1 ? (
                    <MdFavorite />
                  ) : (
                    <div>
                     
                     {d.title}{" "} 
                    </div>
                  )}
                </a>
              </div>
            </>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000, // Ensures the navbar stays on top of other content
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds a small shadow for visual depth
};
export default NavBar;
