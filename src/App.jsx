import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import  Nav  from "./Components/NavIconTemplate/Nav";
import "./Components/NavigationTemplate/Navigation.css";
import { ThemeContext } from "./ThemeContext";

import Navigation from "./Components/NavigationTemplate/Navigation";
import Login from "./Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

import Main from "./Main/Main";
import Analytics from "./Pages/Analytics/Analytics";



function App() {
  const [DarkTheme, setDarkTheme] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  });
  const [nav, setnav] = useState(false);
  const [username, setusername] = useState(false);
  // setting dark theme
  // const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  useEffect(() => {
    setusername(localStorage.getItem("username"));
  });
  const router = createBrowserRouter([{ path: "/", element: <Main /> }]);
  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className="App">
        {LoggedIn ? (
          <>
            <Router>
              <Navigation />
              <Routes>
                <Route path="/" element={<Main />} />
                
                
                
              </Routes>
            </Router>
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;