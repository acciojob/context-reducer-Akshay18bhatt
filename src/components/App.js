import React, { useState } from "react";
import { UserContext } from "../Context/UserContext";
import Home from "./Home";

const App= ()=>{

    const [info, setInfo]= useState({isLogin:true,isAuthenticated:true})
    const [list, setList]= useState([]);
    

    return(
        <UserContext.Provider value={{info,setInfo,list,setList}} >
            <div id="main">
                <Home />
            </div>
        </UserContext.Provider>
    )
}

export default App