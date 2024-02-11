import { useState } from "react";
import { Button, Modal } from 'antd';
let username = localStorage.getItem("username");

export default function Dashboard(){
    





    return (
        <div>
            <div className="Dash-con">
            <div className="Dash-card">
            <div className="nameholder"><h1> Hi, {username}</h1></div>
            
            </div>
            </div>
           
        </div>
    )
}