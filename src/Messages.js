import React from 'react'
import "./Messages.css";

function Messages({message,timestamp,user,userImage}) {
    return (
        <div className="messages">
            <img src={userImage} alt="test"/>
            <div className="message__info">
                <h4>{user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}s </span> ...</h4>
                <p>{message}</p>
             </div>   
             <hr/>
        </div>
    )
}

export default Messages
