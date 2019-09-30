import React from 'react'

export default function LogOut(props) {
    const handleClick = () => {
        props.logOut()
    }    

    const handleUserPoliciesClick = () => {
        props.showMyPolicies()
    }   

    const handleNewPolicyClick = () => {
        props.newPolicy()
    }

    return (
        <div>
            <button onClick={handleNewPolicyClick}>Create Policy</button>
            <button onClick={handleUserPoliciesClick}>My Policies</button>
            <button onClick={handleClick}>LogOut</button>
        </div>
    )
}
