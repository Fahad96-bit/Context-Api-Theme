import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
