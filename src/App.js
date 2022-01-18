import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import { BrowserRouter, 
//   Route, 
//   Routes, 
//   Link} 
//   from 'react-router-dom';


function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
       msg: message,
       type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor = '#044781';
    
    document.body.style.color = 'white';
    showAlert("Dark Mode has been enabled","success");
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} showAlert={showAlert}/>
     <div className='container my-4'>
     
     {/* <Routes> */}
     {/* <Route path="/about"  element={<About />} /> */}
     {/* <Route path="/" element={  } /> */}
     <TextForm heading="Enter the Text" mode={mode}  alert={alert} showAlert={showAlert}/>
     {/* </Routes> */}
     </div>
    {/* </BrowserRouter> */}
  </> 
 

  );
}


export default App;

