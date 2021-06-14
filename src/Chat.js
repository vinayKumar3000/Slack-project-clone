import React from 'react'
import { useParams } from 'react-router-dom'

import {db} from "./firebase";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import "./Chat.css"

import {useState,useEffect} from 'react'

function Chat() {
    const {roomid} =useParams();

    const [roomDetails,setroomDetails]=useState(null);
    const [roomMessages,setroomMessages]=useState([]);
    useEffect(() =>{
        if(roomid){

            db.collection("rooms")
            .doc(roomid)
            .onSnapshot(snapshot => {
                setroomDetails(snapshot.data());
            });
        }
        db.collection("rooms")
        .doc(roomid)
        .collection("messages")
        .orderBy("timestamp","asc")
        .onSnapshot(snapshot => {
            setroomMessages(snapshot.docs.map(doc => doc.data()
                                             )
                           );
                                }
                   );


        

    },[roomid]);
    console.log(roomDetails);
    console.log(roomMessages);
    
    return (
        <div className="chat">
          <div className="chat__header" >
               <div className="chat__headerLeft">
                   <div className="chat__channelName">
                       <strong># {roomDetails?.name}</strong>
                       <StarBorderIcon/>

                   </div>
               </div>   
               <div className="chat__headerRight">
                   <p><InfoIcon/> Details</p>
               </div>   
           </div> 
           <div className="chat__Messages">
                   {roomMessages.map(({message,timestamp,user,userImage}) => 
                       <Messages  message={message} 
                       timestamp={timestamp}
                       user={user}
                       userImage={userImage}/>
                   )}
                
                   
            
           </div>  
           <ChatInput channelName={roomDetails?.name} channelId={roomid}/>
        </div>
    )
}

export default Chat
