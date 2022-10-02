import React, { useState } from "react"
import {
  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar"
import Alert from "./components/Alert"

import TextForm from "./components/TextForm"
import About from "./components/About"
//importing router switch from router react dom




export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white",
        showAlert("light mode has been enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route exact path="/about" title="About Us"
            element={<About />}></Route>
          <Route exact path="/"
          element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
        </div>
    </Router>
    </>
  )
}
