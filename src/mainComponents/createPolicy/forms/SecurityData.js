import React from 'react'

export default function SecurityData(props) {

    const handleChange = (event) => {
        if (!!event.target.checked){
            props.handleInputChange(event.target.id, event.target.checked)
        } else {
            props.handleInputChange(event.target.id, event.target.value)
        }
    }

    return (
        <div className={props.modalContent === 'security' ? "form-data" : "form-data hide"}>
            <h3>Security Policies</h3>
            <small>How do we protect user information?</small>
            <li><label htmlFor="encrypted">Your information is encrypted</label>
                <input onChange={handleChange} type="checkbox" id="encrypted" name="encrypted"/></li>
            <li><label htmlFor="quality_measures">Additional measures</label>
                <input onChange={handleChange} type="text" id="quality_measures" name="quality_measures"/></li>
        </div>
    )
}
