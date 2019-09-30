import React from 'react'
import NoticePolicy from './NoticePolicy'
import ChoicePolicy from './ChoicePolicy'
import AccessPolicy from './AccessPolicy'
import SecurityPolicy from './SecurityPolicy'

export default function PoliciesContainer(props) {
    const flagCount = () => {
        return props.website.endorsements.filter(endorsement => endorsement.flag).length
    }
    
    return (
        <div>
        {props.website.website.company_name} <span id="flag-count">{flagCount()}</span>
            <div className="policies-container">
                    <NoticePolicy noticePolicy={props.website.noticePolicy} 
                                    collectionEntities={props.website.collection_entities}
                                    website={props.website.website}
                                    requiredInfo={props.website.required_info}    
                                    />
                    <ChoicePolicy choicePolicy={props.website.choicePolicy}/>
                    <AccessPolicy accessPolicy={props.website.accessPolicy}/>
                    <SecurityPolicy securityPolicy={props.website.securityPolicy}/>
            </div>
        </div>
    )
}