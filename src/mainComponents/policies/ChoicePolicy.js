import React from 'react'

export default class ChoicePolicy extends React.Component {

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
                <h3>Choice Policy</h3>
                <p>You have <span className={this.state.active ? "bold" : null}>{this.props.choicePolicy.control_scope}</span> control over your data.</p>
                <p>You <span className={this.state.active ? "bold" : null}>{this.props.choicePolicy.delete_data ? "can" : "cannot"}</span> delete your data.</p>
                <p>You <span className={this.state.active ? "bold" : null}>{this.props.choicePolicy.update_data ? "can" : "cannot"}</span> update your data.</p>
                <p>You must <span className={this.state.active ? "bold" : null}>{this.props.choicePolicy.opt_out ? "opt out of" : "opt in to"}</span> certain services.</p>
            </div>
        )
    }
}
