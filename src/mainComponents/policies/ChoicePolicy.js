import React from 'react'

export default function ChoicePolicy(props) {
    return (
        <div className="policy">
            <h3>Choice Policy</h3>
            <p>You have <span>{props.choicePolicy.control_scope}</span> control over your data.</p>
            <p>You <span>{props.choicePolicy.delete_data ? "can" : "cannot"}</span> delete your data.</p>
            <p>You <span>{props.choicePolicy.update_data ? "can" : "cannot"}</span> update your data.</p>
            <p>You must <span>{props.choicePolicy.opt_out ? "opt out of" : "opt in to"}</span> certain services.</p>
        </div>
    )
}
