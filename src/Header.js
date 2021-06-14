import React from 'react'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import "./Header.css";
import {useStateValue} from "./StateProvider";



function Header() {
    const [{user}]=useStateValue();
    return (
        <div className="header">

          
            <div className="header__left">
               
                <Avatar   className="header__avatar"
                            src={user?.photoURL}
                            alt={user?.displayName}>
                </Avatar>
                <AccessTimeIcon/>
            </div>

            <div className="header__search ">
                 <SearchIcon/>
                 <input placeholder="search"></input>
            </div> 

          
            <div className="header__right">
                <HelpIcon></HelpIcon>
            </div> 
        </div>
    )
}

export default Header
