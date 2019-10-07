import React from 'react'

export default function LogOut(props) {
    const handleClick = () => {
        props.logOut()
    }    

    const handleUserPoliciesClick = () => {
        props.showMyPolicies()
    }   

    const handleNewPolicyClick = () => {
        props.handleToggleModal()
    }

    return (
        <div>
            <button className="yellow-back" onClick={handleNewPolicyClick}>Create Policy</button>
            <button className="yellow-back" onClick={handleUserPoliciesClick}>My Policies</button>
            <button onClick={handleClick}>LogOut</button>
        </div>
    )
}
