import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Logo(props) {
    
    const handleClick = () => {
        props.resetMain()
    }

    return (
        <NavLink to="/">
            <div className="logo" onClick={handleClick}>
                    <img src={require('../images/shield.png')} alt="DataTrust Shield Logo"/>
                    <span id="name-data">Data</span><span>Trust</span>
            </div>
        </NavLink>
    )
}
