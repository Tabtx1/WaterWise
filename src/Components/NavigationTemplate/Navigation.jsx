import Nav from "../NavIconTemplate/Nav";
import "./Navigation.css";
import { FiChevronLeft, FiBell } from "react-icons/fi";
import { TbDashboard, TbFileUpload, TbFilePencil } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { MdSwapHoriz } from "react-icons/md";
import { VscCircuitBoard } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { RiLogoutBoxLine } from "react-icons/ri";

const Navigation = () => {
  const [nav, setnav] = useState(false);
  const [username, setusername] = useState(false);
  // setting dark theme
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.email);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div id="close-up" className={`navigation ${nav && "active"} `}>
      
      <header>
        <div className="profile">
          <FiUser className="profile-img" />
        </div>
        <span>{} </span>
      </header>
      <NavLink className="Circuit" to="/">
        <Nav Icon={VscCircuitBoard} title={"Dashboard"} />
      </NavLink>
      <div className="divider"></div>
       
      {/**<div className="divider"></div>

     <div className="divider"></div>*/}
      
     {/** <Nav
        Icon={MdSwapHoriz}
        title={`${
          DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
        }`}
        onClick={changeTheme}
      />*/} 

      <div
        className={`menu ${nav && "active"}`}
        onClick={() => {
          setnav((prevState) => !prevState);
        }}
      >
       {/**  <FiChevronLeft className="menu-icon" /> */}
      </div>

      
      <div className="Log-out" >
      <Nav Icon={RiLogoutBoxLine} title={"Log Out"} onClick={logout} />
      </div>
    </div>
  );
};

export default Navigation;