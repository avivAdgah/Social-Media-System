import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
      //       setColor(document.body.style.backgroundColor = `#${Math.random().toString(16).substring(9)}


export default function RandomColor() {
  const [color, setColor] = useState(`white`);
  const [boolean,setBoolean] = useState(false)

  const colorChange=()=>{
    if(boolean == true){
      setColor(document.body.style.backgroundColor = `#${Math.random().toString(16).substring(9)}`)
    }else{
      setColor(document.body.style.backgroundColor = `white`)
    }
  }
    
  useEffect(()=>{
    setTimeout(colorChange,500)
  })

  return (
    <div className="text-center fixed-bottom mb-3">
      <span className="text-secondary">Random Background Color </span>
      <Button variant="secondary" onClick={()=>{setBoolean(true)}}>
        Start
      </Button>{" "}
      <Button variant="dark" onClick={()=>{setBoolean(false)}}>
        Stop
      </Button>
    </div>
  );
}

