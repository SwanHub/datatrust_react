import React from 'react'

export default function MyPoliciesCard(props) {
    return (
        <p className="list-view-policy" onClick={() => props.showPolicy(props.website)}>
           {props.website.website.company_name} 
        </p>
    )
}
