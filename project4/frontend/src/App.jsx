import { useState } from "react";

function App(){
  const [dbtime,setDbtime]=useState("");
  const [text,setText]=useState("");
  const API = "http://localhost:5001";
  console.log("API =", API);
  const fetchtime=async()=>{
    const res=await fetch(`${API}/api/time`);
    const data=await res.json();
    setDbtime(data.time);
  }
  const handlesubmit=async(e)=>{
    e.preventDefault(); 
    const res=await fetch(`${API}/api/data`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message:text})
    })
    const data=await res.json();
    alert(data.message);
    setText("");
  }
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px",padding:"20px"  }} >
      <button onClick={fetchtime}>Sync time from DB</button>
      <h1>Current Time from DB: {dbtime}</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter message...."/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
