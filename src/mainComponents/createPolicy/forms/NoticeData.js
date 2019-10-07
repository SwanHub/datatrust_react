import React from 'react'

export default function NoticeData(props) {
    return (
        <div className={props.modalContent === 'notice' ? "notice-form" : "notice-form hide"}>
            <h3>Notice Policies</h3>
            <small>What information do we gather? And how do we use it?</small>
            <ul>
            <li className="form_row"><label htmlFor="cookies">We Use Cookies</label>
                <input type="checkbox" autoComplete="off" id="cookies" name="cookies"/></li>
            <li className="form_row"><label htmlFor="cookies_required">We Require Cookies</label>
                <input type="checkbox" autoComplete="off" id="cookies_required" name="cookies_required"/></li>
            <li><label htmlFor="use_for_site_improvement">Use for Site Improvement</label>
                <input type="checkbox" id="use_for_site_improvement" name="use_for_site_improvement"/></li>
            <li><label htmlFor="use_for_data_analysis">Use for Behavior Analysis</label>
                <input type="checkbox" id="use_for_data_analysis" name="use_for_data_analysis"/></li>
            <li><label htmlFor="use_for_profit">Sell to Third Parties</label>
                <input type="checkbox" id="use_for_profit" name="use_for_profit"/></li>
            <li><label htmlFor="collect_by_asking">Collect by Voluntary Input</label>
                <input type="checkbox" id="collect_by_asking" name="collect_by_asking"/></li>
            <li><label htmlFor="collect_by_partners">Collect Through Our Partners</label>
                <input type="checkbox" id="collect_by_partners" name="collect_by_partners"/></li>
            <li><label htmlFor="collect_by_tracking">Collect by Device Tracking</label>
                <input type="checkbox" id="collect_by_tracking" name="collect_by_tracking"/></li>
            </ul>
        </div>
    )
}
