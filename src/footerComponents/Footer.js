import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/privacy">Privacy</NavLink></li>
                <li><NavLink to="/support">Support</NavLink></li>
            </ul>
        </footer>
    )
}
