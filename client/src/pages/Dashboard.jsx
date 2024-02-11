import { useState } from "react";
import { Button, Modal } from 'antd';
let username = localStorage.getItem("username");

export default function Dashboard(){
    



    return (
        <div>
            <h1>{username}</h1>
           
        </div>
    )
}