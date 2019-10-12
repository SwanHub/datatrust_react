import React from 'react'

export default class SecurityPolicy extends React.Component {

    state = {
        active: false
    }

    toggleActive = () => {
        this.setState({
            active: true
        })
    }

    toggleInactive = () => {
        this.setState({
            active: false
        })
    }

    render(){
        return (
            <div className="policy"
                    onMouseEnter={this.toggleActive} 
                    onMouseLeave={this.toggleInactive}>
                <h3>Security Policy</h3>
                <p>Your data is <span className={this.state.active ? "bold" : null}>{this.props.securityPolicy.encrypted ? "" : "not"}</span> well encrypted.</p>
                <p><span className={this.state.active ? "bold" : null}>{!!this.props.securityPolicy.additional_security ? this.props.securityPolicy.additional_security : "No additional security."}</span></p>
            </div>
        )
    }
}
