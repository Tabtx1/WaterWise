import { useContext } from "react";
import "./Main.css";
import { ThemeContext } from "../ThemeContext";


const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      {/* <Header /> */}
     
    </div>
  );
};

export default Main;