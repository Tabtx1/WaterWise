import { useContext } from "react";
import "./Main.css";
import { ThemeContext } from "../ThemeContext";
import Content from "../Content/Content";


const Main = () => {
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <div className={`main ${DarkTheme && "dark"}`}>
    
        <Content />
    </div>
    
  );
};

export default Main;