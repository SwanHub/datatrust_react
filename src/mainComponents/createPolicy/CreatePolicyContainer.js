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
        domain: '',
        verifiedResult: '',
            company_name: '',
            cookies: null,
            cookies_required: null,
            collect_user_data: null,
            pp_url: '',
            use_for_site_improvement: null,
            use_for_data_analysis: null,
            use_for_profit: null,
            collect_by_asking: null,
            collect_by_partners: null,
            collect_by_tracking: null,
            update_data: null,
            delete_data: null,
            opt_in: null,
            opt_out: null,
            can_view_all_data: null,
            can_dispute_accuracy: null,
            efficient_dispute_process: null,
            dispute_policy: '',
            encrypted: null,
            quality_measures: '',
            additional_security: '',
            self_regulation: null,
            privacy_seal: null,
            privacy_seal_vendor: '',
            user_id: localStorage.userId
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
        fetch(`https://cors-anywhere.herokuapp.com/https://api.securitytrails.com/v1/domain/${this.state.domain}?apikey=HP9up5LK5YT0tNJWg1Fd0KRRCrWDRNv1`)
            .then(r => r.json())
            .then(r => this.displayVerificationResults(r))
    }

    handleInputChange = (field, value) => {
        this.setState({
            [field]: value
        })
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
            domain: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const postObj = {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.jwt}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state)
                }

        fetch(`http://localhost:3000/websites`, postObj)
            .then(r => r.json())
            .then(console.log)
    }

    render() {
        return (
            <>
                <div className="modal-content">
                <span className="close-button" onClick={this.handleCloseModal}>&times;</span>
                <h3>Verify domain</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="new-domain-container">
                    <input id="domain" 
                            autoComplete="off" 
                            type="text" 
                            value={this.state.domain} 
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

                    <CoreData modalContent={this.state.modalContent} formState={this.state}handleInputChange={this.handleInputChange}/> 
                    <NoticeData modalContent={this.state.modalContent} handleInputChange={this.handleInputChange}/>
                    <ChoiceData modalContent={this.state.modalContent} handleInputChange={this.handleInputChange}/>
                    <AccessData modalContent={this.state.modalContent} handleInputChange={this.handleInputChange}/>
                    <SecurityData modalContent={this.state.modalContent} handleInputChange={this.handleInputChange}/>
                    <EnforcementData modalContent={this.state.modalContent} handleInputChange={this.handleInputChange}/>
                    
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



