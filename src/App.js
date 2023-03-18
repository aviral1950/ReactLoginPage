import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Register} from './register'
import { Login} from './login'

function App() {
  
  
  const [currentForm,setCurentForm]=useState('login')

  const toggleForm=(formName)=>{
    setCurentForm(formName);
  }
  return (
    <div className='App'>
    {
      currentForm == "login"?<Login onFormSwitch={toggleForm} />:<Register onFormSwitch={toggleForm}/>
    }
    </div>

  );
}

export default App;
