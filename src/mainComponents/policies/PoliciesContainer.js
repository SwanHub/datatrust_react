import React from 'react'
import NoticePolicy from './NoticePolicy'
import ChoicePolicy from './ChoicePolicy'
import AccessPolicy from './AccessPolicy'
import SecurityPolicy from './SecurityPolicy'


export default function PoliciesContainer(props) {

    const flagCount = () => {
        return props.website.endorsements.filter(endorsement => endorsement.flag).length
    }
    
    const endorseCount = () => {
        return props.website.endorsements.filter(endorsement => endorsement.endorse).length
    }
    
    return (
        <div>
        <h2>{props.website.website.company_name}</h2>
        <div className="flag-zone">
            <div>
                <img className="flag-endorse-icon" src={require('../../images/thumbsdown-48.png')}/>
                <span className="flag-endorse-count"> {flagCount()}</span>
            </div>
            <div>
                <img className="flag-endorse-icon" src={require('../../images/thumbsup-48.png')}/>
                <span className="flag-endorse-count"> {endorseCount()}</span>
            </div>

        </div>
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