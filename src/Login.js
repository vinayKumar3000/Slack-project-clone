import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth,provider } from './firebase';
import {useStateValue} from "./StateProvider";
import {actiontypes} from "./reducer";
function Login() {

    const [{user},dispatch]=useStateValue();
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
            dispatch(
                {
                 type:actiontypes.SET_USER,
                 user:result.user,
            });
        })
        .catch((err)=>{
            alert(err.message);
        }
        )
    }
    return (
        <div className="login">
            <div className="login__container">
                 <img src="https://image.cnbcfm.com/api/v1/image/105684220-1547727181154mb_slack_01.jpg?v=1547727329"
                  alt=''/>
                  <h2>Welcome</h2>
                 <Button onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
