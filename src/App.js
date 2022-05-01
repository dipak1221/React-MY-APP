
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


// let name="Dipak";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable", "success");
      // document.title = "Light mode ";
      // setInterval(() => {
      //   document.title = "My-APP is best";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Pls install My-APP";
      // }, 1400);
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#1c644f';
      showAlert("Dark mode is enable", "success");
      // document.title = "Dark mode ";
    }
  }

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (

   <Router>
     <>
      {/* <Navbar /> */}
       {/* <Navbar title="My-APPS" /> */}
        <Navbar title="My-APPS" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-3" >
          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try - MyAPP, Word Counter, Character Counter, Copy text" mode={mode} />} />
          {/* <TextForm showAlert={showAlert} heading="Enter some text to analyze" mode={mode} /> */}

          </Routes>
        </div>
    


      </>
      </Router>
      );
}


      export default App;
