import React, { useState, useEffect } from 'react';
import Login from './Login';
import Mainpage from './Mainpage';

const Overlord=(props)=>{
    const [ isLoggedin, setIsLoggedin ] = useState(true);
    const [ username, setUsername ] = useState("Blaster");

    if(!isLoggedin){
        return(<Login />);
    }
    else return <Mainpage />
}
export default Overlord;

