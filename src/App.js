import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has Been Enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  return (
    <>
      {/* <Router>
        <Navbar
          title="TextUtils"
          AboutText={"About"}
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar> */}
      <Navbar
        title="TextUtils"
        AboutText={"About"}
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route>
            <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        ></TextForm>
        {/* </Route>
          </Switch> */}

        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
