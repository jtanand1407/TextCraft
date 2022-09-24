
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';






export default function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>
  {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setalert(null);
    },1500);
    
  }

  const toggleMode=()=>{
    if(mode==='dark')
    {
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("Light Mode is enabled","success");
    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode is enabled","success");
    }
  }

  

  return(
    <>
   
 <Navbar title="TextUtils"  about="About" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
 <div className="container my-3" >
      
        <TextForm showalert={showalert} heading="Enter your text below" mode={mode} />
 </div>
 
    </>
  );
}


