import React from 'react'

export default function ChoiceData(props) {

    const handleChange = (event) => {
        props.handleInputChange(event.target.id, event.target.checked)
    }

    return (
        <div className={props.modalContent === 'choice' ? "form-data" : "form-data hide"}>
            <h3>Choice Policies</h3>
            <small>What control do we give users over their data?</small>
            <li><label htmlFor="update_data">Update Your Data</label>
                <input onChange={handleChange} type="checkbox" id="update_data" name="update_data"/></li>
            <li><label htmlFor="delete_data">Delete Your Data</label>
                <input onChange={handleChange} type="checkbox" id="delete_data" name="delete_data"/></li>
            <li><label htmlFor="opt_in">Opt-In to our Services</label>
                <input onChange={handleChange} type="checkbox" id="opt_in" name="opt_in"/></li>
            <li><label htmlFor="opt_out">Opt-Out of our Services</label>
                <input onChange={handleChange} type="checkbox" id="opt_out" name="opt_out"/></li>
        </div>
    )
}
