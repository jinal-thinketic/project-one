import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App(props) {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);
  let colorMode = document.getElementById("colorMode");

  const handleAlert = (message, type = "") => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  function handleBackgroundColor(selectedColor) {
    let colorCode = "#ffffff";
    switch (selectedColor) {
      case "white":
        return (colorCode = "#ffffff");
      case "blue":
        return (colorCode = "#1C315E");
      case "yellow":
        return (colorCode = "#FFE9B1");
      case "green":
        return (colorCode = "#285430");
      case "red":
        return (colorCode = "#E97777");
      case "black":
        return (colorCode = "#4f4a4a");
      default:
        return colorCode;
    }
  }
  function handleChangeColor(color) {
    if (colorMode?.checked && color !== "black") {
      colorMode.checked = false;
    }
    setMode(color);
    document.body.style.backgroundColor = handleBackgroundColor(color);
    handleAlert(`${color} mode has been enabled`, "success");
    document.title = `TextUtils - ${color} mode`;
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title1="TextUtils"
        title2="About"
        mode={mode}
        handleChangeColor={handleChangeColor}
      />
      <Alert alert={alert} />
      <div className="container my-5">
        {/* <Routes>
            <Route exact path="/" element={<About />} />
            <Route
              exact
              path="/about"
              element={
                <TextForms
                  handleAlert={handleAlert}
                  heading="enter the text"
                  mode={mode}
                />
              }
            />
          </Routes> */}
        <TextForms
          handleAlert={handleAlert}
          heading="enter the text"
          mode={mode}
        />
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}
export default App;
