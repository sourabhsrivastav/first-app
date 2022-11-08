import { useState } from 'react';
import './App.css';
import About from './Component/About';
import './Component/Navbar'
import Navbar from './Component/Navbar';
import TestForm from './Component/Testform';
import Alert from './Component/Alert';


function App() {
const [mode,setMode]=useState('light')
const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000);
 
}

const toggleMode=()=>{
  if(mode==='light'){
      setMode('dark');
     document.body.style.backgroundColor='#3b444b';
     showAlert("Dark Mode Successfully enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Successfully enabled","success");
  }
}
return (

<>
<Navbar title="Sourabh" mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}></Alert>
<div className="div container my-3">
<TestForm showAlert={showAlert} heading="Text To Convert Upper Case" mode={mode}></TestForm> 

{/* <About></About> */}
</div>

</>
    

  );
}

export default App;
