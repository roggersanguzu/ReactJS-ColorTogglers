import React, {useState,useEffect}  from "react";

function Back(){
    const[color,setColor]=useState('#FFFFFF');

    function Handlers(){
        setColor(color==='#FFFFFF'? '#000000':'#FFFFFF');
    }
    useEffect(()=>{
        document.body.style.backgroundColor=color;
    },[color])
return(
    <div className="container">
        <h1>Toggling Background Color</h1>
        <h2>Tech Innovations</h2>
        <h3>React Ninjas</h3>
        <button onClick={Handlers}>Change Colors</button>
    </div>
)
}
export default Back;