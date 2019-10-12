import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Logo extends React.Component {
    
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

    handleClick = () => {
        this.props.resetMain()
    }
    render(){
        return (
            <NavLink to="/">
                <div className="logo" 
                        onClick={this.handleClick}
                        onMouseEnter={this.toggleActive}
                        onMouseLeave={this.toggleInactive}>
                    <img src={require('../images/dt-icon.png')} alt="DataTrust Shield Logo"/>
                    
                    <div>
                        <span id="name-data">Data</span><span id="name-trust">Trust</span> <br />
                        <span className={this.state.active ? "logo-show" : "logo-hide"}> 
                            Data Transparency By Popular Demand
                        </span>
                    </div>
                </div>
            </NavLink>
        )
    }
}
