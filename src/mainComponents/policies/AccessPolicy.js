import React from 'react'

export default function AccessPolicy(props) {
    return (
        <div className="policy">
            <h3>Access Policy</h3>
            <p>You <span>{props.accessPolicy.update_data ? "can" : "cannot"}</span> view all of your data.</p>
            <p>You <span>{props.accessPolicy.can_dispute_accuracy ? "can" : "cannot"}</span> dispute your data's accuracy.</p>
            <p>The disputation process is <span>{props.accessPolicy.efficient_dispute_process ? "efficient" : "inefficient"}</span>.</p>
        </div>
    )
}