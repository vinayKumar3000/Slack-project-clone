import "./Sidebar.css";
import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from "./SidebarOption";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {db} from "./firebase"
import {useState} from 'react';
import {useEffect} from 'react';
import {useStateValue} from "./StateProvider";
function Sidebar() {

    const [channels,setChannels]=useState([]);
    const [{user}]=useStateValue();

    useEffect(() => {
       
        db.collection("rooms").onSnapshot((snapshot)=>{
            setChannels(snapshot.docs.map((doc)=>({
                id: doc.id,
                name: doc.data().name,
            })))
        });

   },[]);
     

    return (
        <div className="siderbar">
            <div className="sidebar__header">
               <div className="sidebar__info">
                   <h2>slack project</h2>
                   <h3>
                      <FiberManualRecordIcon/>
                       {user?.displayName}
                   </h3>                
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="thread"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={InsertCommentIcon} title="thread"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={ExpandLessIcon} title="Expand Less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel"/>
            {
                 //connect to DB and list all channels from Firebase
                 channels.map((channel)=><SidebarOption key={channel.id} id={channel.id} title={channel.name}/>)
            }
           
         </div>
    )
}

export default Sidebar
