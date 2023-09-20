// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
//import router:
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

    const[ alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
          newMessage: message,
          newType: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }

  const[ mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if( mode === 'light' ){
      setMode("dark");
      document.body.style.backgroundColor ='#272742'; //#2b3035
      document.body.style.color ='white';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      document.body.style.color ='black';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextDoodle" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
    {/* <Routes> */}
      {/* <Route */}
       {/* exact path = "/" */}
       {/* element ={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>}> */}
       <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>
      {/* </Route> */}
    {/* <Route */}
    {/* exact path= "about" */}
    {/* element  ={<About/>}> */}
    {/* </Route> */}
{/* </Routes> */}
</div>
{/* </BrowserRouter> */}
    </>
  );
}

export default App;
