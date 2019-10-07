import React, { Component } from 'react'
import CoreData from './forms/CoreData'
import NoticeData from './forms/NoticeData'
import ChoiceData from './forms/ChoiceData'
import AccessData from './forms/AccessData'
import SecurityData from './forms/SecurityData'
import EnforcementData from './forms/EnforcementData'

export default class CreatePolicyContainer extends Component {

    state = {
        modalContent: 'core',
        newPolicyDomain: '',
        verifiedResult: ''
    }

    handleCloseModal = () => {
        this.props.handleToggleModal()
    }

    handleStep = (event) => {
        this.setState({
            modalContent: event.target.id.slice(5) 
        })
    }

    handleVerification = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.securitytrails.com/v1/domain/${this.state.newPolicyDomain}?apikey=HP9up5LK5YT0tNJWg1Fd0KRRCrWDRNv1`)
            .then(r => r.json())
            .then(r => this.displayVerificationResults(r))
    }

    displayVerificationResults = (response) => {
        if (!!response.message) {
            this.setState({
                verifiedResult: 'unverified'
            })
        } else {
            this.setState({
                verifiedResult: 'verified'
            })
        }
    }

    handleDomainInputChange = (event) => {
        this.setState({
            newPolicyDomain: event.target.value
        })
    }
    
    // displayVerificationResult(json){
    //     if (!!json.hostname){
    //         verifyResult.innerText = "Verified"
    //         verifyResult.className = 'yellow_back'
    //     } else {
    //         verifyResult.innerText = "Not Verified"
    //         verifyResult.className = 'alert_back'
    //     }
    // }

    render() {
        return (
            <>
                <div className="modal-content">
                <span className="close-button" onClick={this.handleCloseModal}>&times;</span>
                <h3>Verify domain</h3>
                <form>
                    <div className="new-domain-container">
                    <input id="new-domain" 
                            autoComplete="off" 
                            type="text" 
                            value={this.state.newPolicyDomain} 
                            onChange={this.handleDomainInputChange}
                            name="domain" />
                    <svg onClick={this.handleVerification} id="verify-button" viewBox="0 0 442.533 442.533">
                        <path d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248
                        l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852
                        C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828
                        c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33
                        c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/>
                    </svg>
                    </div>
                    {!!this.state.verifiedResult 
                            ? <p id="verify-result" 
                                    className={this.state.verifiedResult === 'verified' 
                                        ? "success"    
                                        : "alert"}>{this.state.verifiedResult}</p> 
                            : null}
                    <div id="multi-form">

                    <CoreData modalContent={this.state.modalContent}/> 
                    <NoticeData modalContent={this.state.modalContent}/>
                    <ChoiceData modalContent={this.state.modalContent}/>
                    <AccessData modalContent={this.state.modalContent}/>
                    <SecurityData modalContent={this.state.modalContent}/>
                    <EnforcementData modalContent={this.state.modalContent}/>
                    
                    <div style={{textAlign: 'center', marginTop: '40px'}}>
                        <span onClick={this.handleStep} 
                                id="step-core" 
                                className={this.state.modalContent === 'core' ? "step active current" : "step"}></span>
                        <span onClick={this.handleStep} 
                                id="step-notice" 
                                className={this.state.modalContent === 'notice' ? "step active current" : "step"}></span>
                        <span onClick={this.handleStep} 
                                id="step-choice" 
                                className={this.state.modalContent === 'choice' ? "step active current" : "step"}></span>
                        <span onClick={this.handleStep} 
                                id="step-access" 
                                className={this.state.modalContent === 'access' ? "step active current" : "step"}></span>
                        <span onClick={this.handleStep} 
                                id="step-security" 
                                className={this.state.modalContent === 'security' ? "step active current" : "step"}></span>
                        <span onClick={this.handleStep} 
                                id="step-enforcement" 
                                className={this.state.modalContent === 'enforcement' ? "step active current" : "step"}></span>
                    </div>
                    
                    <input id="new-site-submit" type="submit" name="commit" value="Submit New Website"/>
                    </div> 
                </form>
                </div>
            </>
        )
    }
}

// const form = document.querySelector('form')
// const input = document.querySelector('#new_domain')
// const verifyButton = document.querySelector('svg#verify_button')
// const verifyResult = document.querySelector('#verify_result')

// // for tabbing through the multi form when creating a new policy...
// localStorage.setItem('currentFormTab', 'core_form')

// form.addEventListener('submit', postNewWebsite)
// verifyButton.addEventListener('click', verifyDomain)

// function postNewWebsite(){
//     event.preventDefault()
//     const configPostObj = {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"},
//             body: JSON.stringify(formValues())
//           }
//     fetch(`https://datatrust-api.herokuapp.com/websites`, configPostObj)
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

// // {window.location.href = "policies.html"}

// function formValues(){
//     let obj = {}
//     let textArray = Array.from(modal.querySelectorAll('input[type=text]'))
//     textArray.map(item => {
//         obj[`${item.name}`] = `${item.value}`
//     })
//     let checkboxArray = Array.from(modal.querySelectorAll('input[type=checkbox]'))
//     checkboxArray.map(item => {
//         obj[`${item.name}`] = `${item.checked}`
//     })
//     fullObj = Object.assign({user_id: localStorage.userId}, obj)
//     return fullObj
// }


