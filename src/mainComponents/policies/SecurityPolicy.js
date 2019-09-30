import React from 'react'

export default function SecurityPolicy(props) {
    return (
        <div className="policy">
            <h3>Security Policy</h3>
            <p>Your data is <span>{props.securityPolicy.encrypted ? "" : "not"}</span> well encrypted.</p>
            <p><span>{!!props.securityPolicy.additional_security ? props.securityPolicy.additional_security : "No additional security."}</span></p>
        </div>
    )
}
