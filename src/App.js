import "./App.css";
import AdSnippet from "./features/components/AdSnippet/AdSnippet";
import Header from "./features/components/header/Header";
import Navbar from "./features/components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AdSnippet />
    </div>
  );
}

export default App;
