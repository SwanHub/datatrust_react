import React from 'react'

export default function CoreData(props) {

    const handleChange = (event) => {
        if (!!event.target.checked){
            props.handleInputChange(event.target.id, event.target.checked)
        } else {
            props.handleInputChange(event.target.id, event.target.value)
        }
    }

    return (
        <div className={props.modalContent === 'core' ? "form-data" : "form-data hide"}>
            <h3>Basics</h3>
            <small>Do we collect personal information from our users?</small>
            <li><label htmlFor="company_name">Company Name</label>
                <input onChange={handleChange} 
                        type="text" 
                        autoComplete="off" 
                        id="company_name" 
                        name="company_name"/></li>
            <li><label htmlFor="pp_url">Policy Url</label>
                <input onChange={handleChange} type="text" autoComplete="off" id="pp_url" name="pp_url"/></li>
            <li><label htmlFor="collect_user_data">Collect User Data</label>
                <input onChange={handleChange} type="checkbox" autoComplete="off" id="collect_user_data" name="collect_user_data"/></li>
        </div>
    )
}
