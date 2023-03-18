import React,{useState} from "react"


export const Login=(props) => {

    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');


    const handSubmit=(e)=>{
        e.preventDefault();
        console.log(email); 
    
    }

    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
       <form className="loginForm" onSubmit={handSubmit}>
        <label htmlFor="email">Email :</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" id="email" name="email"/>
        <label htmlFor="Password">Password :</label>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}   type="Password" name="pass" id="pass" placeholder="***********"/>
        <button className="login-button" type="submit">Log In</button>
       </form>

       <button className="b1" onClick={()=>props.onFormSwitch('register')}>Dont have an Account?register</button>
       </div>
    )
}
