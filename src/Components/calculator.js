import React, {useState} from 'react';

const Calculator = () => {

 const [num1, setNum1] = useState("");
 const [num2, setNum2] = useState("");
 const [res, setRes] = useState("");
 const [error, setError] = useState("");


 const num1handler=(event)=>{
setNum1(Number(event.target.value))
 }
 const num2handler=(event)=>{
    setNum2(Number(event.target.value))
     }
     const addition=()=>{
        if(num1==""|| num2==""){
            setError("All fields are required");
              setRes("");
        }
        else{
            setRes(num1+num2);
              setError("");
            setNum1(" ");
            setNum2("");
        }
       
     }
    
     const sub=()=>{
        if(num1==""|| num2==""){
            setError("All fields are required");
              setRes("");
        }
        else{
            setRes(num1-num2);
              setError("");
            setNum1(" ");
            setNum2("");
        }
      }
      const multi=()=>{
        if(num1==""|| num2==""){
            setError("All fields are required");
              setRes("");
        }
        else{
            setRes(num1*num2);
              setError("");
            setNum1(" ");
            setNum2("");
        }
      }
      const divi=()=>{
        if(num1==""|| num2==""){
            setError("All fields are required");
              setRes("");
        }
        else{
            setRes(num1/num2);
              setError("");
            setNum1(" ");
            setNum2("");
        }
      }
       

    return (
        <div>
        <div className='main'>
            <div className='container'>
            <h2>React Calculator</h2>
                <div className='input'>
                    <input type="number" placeholder='num 1' onChange={num1handler}  value={num1}/>
                  
                </div>
                <div className='input'>
                <input type="number" placeholder='num 2' onChange={num2handler}  value={num2}/>
                </div>

                <div>
                    <button onClick={addition}>+</button>
                    <button onClick={sub}>-</button>
                    <button onClick={multi}>*</button>
                    <button onClick={divi}>/</button>
                   
                </div>
                <div className='result'>
                      {error &&   <h3 style={{color:"red"}}> {error} </h3> }
                      {res && <h3 style={{color:"green"}}> {res} </h3> }
            </div>
            </div>
            </div>
        </div>
    );
}

export default Calculator;
