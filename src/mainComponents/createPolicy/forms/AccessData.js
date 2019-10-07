import React from 'react'

export default function AccessData(props) {

    const handleChange = (event) => {
        if (!!event.target.checked){
            props.handleInputChange(event.target.id, event.target.checked)
        } else {
            props.handleInputChange(event.target.id, event.target.value)
        }
    }

    return (
        <div className={props.modalContent === 'access' ? "form-data" : "form-data hide"}>
            <h3>Access Policies</h3>
            <small>What data can users see?</small>
            <li><label htmlFor="can_view_all_data">Users can view all their data</label>
                <input onChange={handleChange} type="checkbox" id="can_view_all_data" name="can_view_all_data"/></li>
            <li><label htmlFor="can_dispute_accuracy">Users can dispute their data's accuracy</label>
                <input onChange={handleChange} type="checkbox" id="can_dispute_accuracy" name="can_dispute_accuracy"/></li>
            <li><label htmlFor="efficient_dispute_process">The disputation process is efficient</label>
                <input onChange={handleChange} type="checkbox" id="efficient_dispute_process" name="efficient_dispute_process"/></li>
            <li><label htmlFor="dispute_policy">Our dispute policy</label>
                <input onChange={handleChange} type="text" id="dispute_policy" name="dispute_policy"/></li>
        </div>
    )
}
