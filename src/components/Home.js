import React, { useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import DisplayList from "./DisplayList";



const Home= ()=>{


    const [inputText, setInputText]= useState("");

    const {info,setInfo,list,setList}= useContext(UserContext);
    const {isLogin,isAuthenticated}= info;

    

    function removeItem(id){
        let filteredList= list.filter(item=>!(item.toLowerCase().includes(id.toLowerCase())))
        setList(filteredList);
    }

    function handleTextInput(e){
        setInputText(e.target.value)
    }

    function handleAdd(){
        setList([...list,inputText])
        setInputText("");
    }

    function clearList(){
        
        setList([]);
    }
    return(
        <div>   
                <ul>
                    {list.length>0 && (list.map((text,ind)=><DisplayList removeItem={removeItem} key={ind} text={text} />))}
                </ul>
                <div>
                    <strong>Current user:{isLogin?"rohan":""}, </strong>
                    <strong>IsAuthenticated: {isAuthenticated?"Yes":"No"}</strong>
                </div>
                <div>
                    <button onClick={()=>setInfo({isLogin:true,isAuthenticated:true})} id="login-btn">Login</button>
                    <button onClick={()=>setInfo({isLogin:false,isAuthenticated:false})} id="signout">Signout</button>
                </div>
                <div>
                    <input id="shopping-input" onChange={handleTextInput} value={inputText}/>
                    <button onClick={handleAdd}>Add</button>
                </div>
                <div>
                    <button onClick={clearList} id="clear-list">Clear List</button>
                </div>
        </div>
    )
}

export default Home