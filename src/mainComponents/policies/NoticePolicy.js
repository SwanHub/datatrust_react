import React from 'react'

export default function NoticePolicy(props) {

    return (
        <div className="policy">
            <h3>Notice Policy</h3>

            <p>We <span>{props.website.collect_user_data ? "" : "do not"}</span> collect user data.</p>
            
            <p>We collect via: </p>
                <span className="block">{props.noticePolicy.collect_by_asking ? "Voluntary Input" : ""}</span>
                <span className="block">{props.noticePolicy.collect_by_partners ? "Our Partners" : ""}</span>
                <span className="block">{props.noticePolicy.collect_by_asking ? "Device Tracking" : ""}</span>
            
            
            <p>Our collection Entities:</p>
                <span className="block">{props.collectionEntities.length > 0 ? props.collectionEntities[0].name : null}</span>
            
            <p>We <span>{props.noticePolicy.third_parties ? "" : "do not"}</span> sell to third parties.</p>
            
            <p>We use your data for: </p>
                <span className="block">{props.noticePolicy.use_for_site_improvement ? "Site Improvement" : ""}</span>
                <span className="block">{props.noticePolicy.use_for_data_analysis ? "Behavioral Analysis" : ""}</span>
                <span className="block">{props.noticePolicy.use_for_profit ? "Sell for Profit" : ""}</span>
    
        {/* eventually, render required info... not absolutely necessary for right now */}

        </div>
    )
}
