import React from 'react'

export default function EnforcementData(props) {

    const handleChange = (event) => {
        if (!!event.target.checked){
            props.handleInputChange(event.target.id, event.target.checked)
        } else {
            props.handleInputChange(event.target.id, event.target.value)
        }
    }

    return (
        <div className={props.modalContent === 'enforcement' ? "form-data" : "form-data hide"}>
            <h3>Enforcement Policies</h3>
            <small>Who holds us accountable?</small>
            <li><label htmlFor="self_regulation">We self-regulate</label>
                <input onChange={handleChange} type="checkbox" id="self_regulation" name="self_regulation"/></li>
            <li><label htmlFor="privacy_seal">We received a privacy seal</label>
                <input onChange={handleChange} type="checkbox" id="privacy_seal" name="privacy_seal"/></li>
            <li><label htmlFor="privacy_seal_vendor">From this organization</label>
                <input onChange={handleChange} type="text" id="privacy_seal_vendor" name="privacy_seal_vendor"/></li>
        </div>
    )
}
