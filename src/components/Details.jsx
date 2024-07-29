import React from "react";
import './Details.css'
const Details = ({bmi})=>{
    
const typeOf = (bmi)=>{
    let info = ""
    if (bmi < 18.5) return "UnderWeight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal Weight";
    if (bmi >= 25 && bmi < 29.9) return "OverWeight";
    if (bmi >= 30) return "Obesity";
    return info
}
return <div className="details">
    <span>
        
    {typeOf(bmi)}
    </span>
    </div>
}

export default Details;