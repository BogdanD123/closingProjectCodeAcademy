import { useState } from "react";
import Header from "./features/components/header/Header";
import Navbar from "./features/components/navbar/Navbar";
import NewsFeed from "./features/components/newsfeed/NewsFeed";
import SignUpLoginPopUp from "./features/components/signupLoginPopUp/SignUpLoginPopUp";
import SignUpBar from "./features/components/signupbar/SignUpBar";
import LoginContextProvider from "./features/context/loginContext";
import "./HomePage.css";

function HomePage() {
  const [popUpLogin, setPopUpLogin] = useState(false);

  const handlePopUpLogin = () => {
    setPopUpLogin(!popUpLogin);
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      {popUpLogin ? (
        <div>
          <LoginContextProvider>
            <SignUpLoginPopUp handlePopUpLogin={handlePopUpLogin} />
          </LoginContextProvider>
        </div>
      ) : (
        ""
      )}
      <NewsFeed />
      <SignUpBar handlePopUpLogin={handlePopUpLogin} />
    </div>
  );
}
export default HomePage;
