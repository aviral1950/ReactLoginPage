import React,{useState} from "react"


export const Register=(props ) => {

    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');



    const handSubmit=(e)=>{
        e.preventDefault();
        console.log(email); 
    
    }

    return (
        <div className="auth-form-container">
            <h2 >Register</h2>
       <form className="registr-form" onSubmit={handSubmit}>
        <label htmlFor="name">Full Name :</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" id="email" name="email"/>
        <label htmlFor="Password">Password</label>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}   type="Password" name="pass" id="pass" placeholder="***********"/>
        <button className="register-button" type="submit">Register</button>
       </form>

       <button className="b2" onClick={()=>props.onFormSwitch('login')}>Already have an Account?Login</button>
       </div>
    )
}