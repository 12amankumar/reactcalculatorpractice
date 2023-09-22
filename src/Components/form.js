import React , {useState} from 'react';

const Form = () => {

   
const  [name, setName] = useState("");
const  [email, setEmail] = useState("");
const  [password, setPassword] = useState("");
const  [confirmpassword, setConfirmpassword] = useState("");
const  [error, setError] = useState("");
const  [success, setSuccess] = useState("");





const setnamehandlername=(event)=>{
    setName(event.target.value)
}
const setnamehandleremail=(event)=>{
    setEmail(event.target.value)
}

const setnamehandlerpassword=(event)=>{
    setPassword(event.target.value)
}

const setnamehandlerconpassword=(event)=>{
    setConfirmpassword(event.target.value)
}

const Registerhandler=()=>{
    if(name===""|| email===""||password===""||confirmpassword===""){
        setError("All fields are required");
        setSuccess("");
    }
    else{
         setSuccess("Form Submitted Successfully");
         setError("");
         setName("");
         setEmail("");
         setPassword("");
         setConfirmpassword("");
         fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: name, password: password })
  }).then((res) => {
    if (res.status === 200) alert("Authenticated");
    else alert("User doesn't exist");
  });
    }
}




    return (
        <div>
            <div className='main'>
                <div className='container'>
                <h2>Register</h2>
                {error &&   <h3 style={{color:"red"}}> {error} </h3> }
                {success && <h3 style={{color:"green"}}> {success} </h3> }
               
                    <div className='input'>
                        <input type="text" placeholder='Enter name'  onChange={setnamehandlername} value={name}/>
                    </div>

                    <div className='input'>
                        <input type="text" placeholder='Enter email'   onChange={setnamehandleremail} value={email}/>
                    </div>

                    <div className='input'>
                        <input type="text" placeholder='Enter password'   onChange={setnamehandlerpassword} value={password}/>
                    </div>

                    <div className='input'>
                        <input type="text" placeholder='Enter confirm password'   onChange={setnamehandlerconpassword} value={confirmpassword}/>
                    </div>

                    <button onClick={Registerhandler}>Register</button>
                  
               
                </div>
            </div>
        </div>
    );
}

export default Form;
