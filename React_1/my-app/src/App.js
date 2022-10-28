import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    //setTimeout is used to run a logic after specified time
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#312f4a';
    showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light  mode has been enabled","success");
    }
  }

  const toggleRedMode=()=>{
    if(mode==='light'){
      setmode('darkred');
      document.body.style.backgroundColor='#f25a61';
      showAlert("Darkred mode has been enabled","success");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light  mode has been enabled","success");
      }
  }




  return (
   <>
 
    <Router>
   <Navbar title="VK" home="HOME" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode}/>
   <Alert alert={alert}/>
   
   <div className="container my-3">
   <Switch>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/">
          <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
          </Route>

   </Switch>
   
     
   </div>
   </Router>
  </>
  );
}

export default App;
