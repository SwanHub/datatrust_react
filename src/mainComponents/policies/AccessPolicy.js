import React from 'react'

export default class AccessPolicy extends React.Component {

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
                <h3>Access Policy</h3>
                <p>You <span className={this.state.active ? "bold" : null}>{this.props.accessPolicy.update_data ? "can" : "cannot"}</span> view all of your data.</p>
                <p>You <span className={this.state.active ? "bold" : null}>{this.props.accessPolicy.can_dispute_accuracy ? "can" : "cannot"}</span> dispute your data's accuracy.</p>
                <p>The disputation process is <span className={this.state.active ? "bold" : null}>{this.props.accessPolicy.efficient_dispute_process ? "efficient" : "inefficient"}</span>.</p>
            </div>
        )
    }
}