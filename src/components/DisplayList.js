import React from "react";


const DisplayList= ({text, removeItem})=>{

    
    function handleRemove(){
        removeItem(text)
    }

    let addId= `item-${text}`;
    let removeId= `remove-${text}`
    return(
        <li id={addId} >{text} <button onClick={handleRemove} id={removeId} >Remove</button></li>
    )
}

export default DisplayList