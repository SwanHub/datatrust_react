import React from 'react'

export default function SecurityData(props) {
    return (
        <div className={props.modalContent === 'security' ? "security-form" : "security-form hide"}>
            <h3>Security Policies</h3>
            <small>How do we protect user information?</small>
            <li><label htmlFor="encrypted">Your information is encrypted</label>
            <input type="checkbox" id="encrypted" name="encrypted"/></li>
            <li><label htmlFor="quality_measures">Additional measures</label>
            <input type="text" id="quality_measures" name="quality_measures"/></li>
        </div>
    )
}
