import React from 'react'

export default function CoreData(props) {
    return (
        <div className={props.modalContent === 'core' ? "core-form" : "core-form hide"}>
            <h3>Basics</h3>
            <small>Do we collect personal information from our users?</small>
            <ul>
            <li className="form-row"><label htmlFor="register_company_name">Company Name</label>
                <input type="text" autoComplete="off" id="register_company_name" name="company_name"/></li>
            <li><label htmlFor="pp_url">Policy Url</label>
                <input type="text" autoComplete="off" id="pp_url" name="pp_url"/></li>
            <li><label htmlFor="collect_user_data">Collect User Data</label>
                <input type="checkbox" autoComplete="off" id="collect_user_data" name="collect_user_data"/></li>
            </ul>
        </div>
    )
}
