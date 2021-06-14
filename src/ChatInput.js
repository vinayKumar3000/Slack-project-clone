import React from 'react'
import "./ChatInput.css";
import { Button } from '@material-ui/core';
import {useState} from 'react';
import { db } from './firebase';
import firebase from 'firebase';
import {useStateValue} from './StateProvider'
function ChatInput({channelName,channelId}) {
    const [input,setInput]=useState("");
    const [{user},dispatch]=useStateValue();

    const sendMessage =(e)=>{
        e.preventDefault();
       if (channelId){
           db.collection("rooms").doc(channelId).collection("messages").add({
               message:input,
               timestamp:firebase.firestore.FieldValue.serverTimestamp(),
               user:user?.displayName,
               userImage:user?.photoURL,
           })
       } 
       setInput("");
       
    };
    
    return (
        <div className="chat__input">
            <form>
               <input  
               value={input}
               onChange={(e)=>setInput(e.target.value)}
               placeholder={`chat #${channelName}`}/>
               <Button type="Submit" onClick={sendMessage}>SEND</Button>
            </form>
           
        </div>
    )
}

export default ChatInput
