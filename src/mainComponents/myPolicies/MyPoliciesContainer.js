import React from 'react'
import MyPoliciesCard from './MyPoliciesCard'

export default function MyPoliciesContainer(props) {
    const renderMyPolicies = () => {
        return props.myPoliciesList().map(website => {
            return <MyPoliciesCard website={website.website} />
        })
    }
    
    return (
        <div className="my-policies">
            <h1>My Policies</h1>
            {renderMyPolicies()}
        </div>
    )
}
