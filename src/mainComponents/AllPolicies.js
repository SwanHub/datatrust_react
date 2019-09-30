import React from 'react'

export default function AllPolicies(props) {

    const renderPolicies = () =>  {
        return props.websites.map(website => {
            return <h2 onClick={() => props.showPolicy(website)}>{website.website.company_name }</h2>
        })
    }
    
    return (
        <div>
            {renderPolicies()}
        </div>
    )
}
