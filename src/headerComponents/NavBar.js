import React from 'react'
import Logo from './Logo.js'
import LogIn from './authComponents/LogIn.js'
import LogOut from './authComponents/LogOut.js'

export default function NavBar(props) {
    return (
        <header className="navbar">
            <Logo resetMain={props.resetMain}/>
            {props.loggedIn 
                    ? <LogOut logOut={props.logOut} 
                              showMyPolicies={props.showMyPolicies}
                              newPolicy={props.newPolicy}
                              /> 
                    : <LogIn logIn={props.logIn}/>
                }
        </header>
    )
}
