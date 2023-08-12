import { useState } from "react";
// import AdSnippet from "./features/components/AdSnippet/AdSnippet";
import Header from "./features/components/header/Header";
import Navbar from "./features/components/navbar/Navbar";
import NewsFeed from "./features/components/newsfeed/NewsFeed";
import SignUpLoginPopUp from "./features/components/signupLoginPopUp/SignUpLoginPopUp";
import SignUpBar from "./features/components/signupbar/SignUpBar";
import "./HomePage.css";

function HomePage() {
  const [popUpLogin, setPopUpLogin] = useState(false);

  // let popUpRef = useRef();

  // useEffect(() => {
  //   const handler = (e) => {
  //     // If the menu is open and the clicked target is not within the menu,
  //     // then close the menu
  //     if (
  //       popUpLogin &&
  //       popUpRef.current &&
  //       !popUpRef.current.contains(e.target)
  //     ) {
  //       console.log("popUpRef", popUpRef);
  //       setPopUpLogin(!popUpLogin);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, [popUpLogin]);

  const handlePopUpLogin = () => {
    setPopUpLogin(!popUpLogin);
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      {popUpLogin ? (
        <div>
          <SignUpLoginPopUp handlePopUpLogin={handlePopUpLogin} />
        </div>
      ) : (
        ""
      )}
      {/* <AdSnippet /> */}
      <NewsFeed />
      <SignUpBar handlePopUpLogin={handlePopUpLogin} />
    </div>
  );
}
export default HomePage;
