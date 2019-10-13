import React from 'react'
import NoticePolicy from './NoticePolicy'
import ChoicePolicy from './ChoicePolicy'
import AccessPolicy from './AccessPolicy'
import SecurityPolicy from './SecurityPolicy'


export default class PoliciesContainer extends React.Component {

    state = {
        flags: 0,
        changeAuthorization: true,
        endorsements: 0,
        kickback: false,
        actionLimit: false
    }
    
    componentDidMount(){
        const f = this.props.website.endorsements.filter(endorsement => endorsement.flag).length
        const e = this.props.website.endorsements.filter(endorsement => endorsement.endorse).length
        const authorized = this.props.website.endorsements.find(endorsement => {
            return endorsement.user_id === parseInt(localStorage.userId)
        })

        this.setState({
            flags: f,
            endorsements: e,
            changeAuthorization: !authorized
        })
    }

    // optimistically render flagging a privacy policy
    flag = () => {
        if (!!localStorage.userId){

            // if not, then add one to the current flag count on the virtual DOM and fetch post the change.
             if (this.state.changeAuthorization){
                 this.setState({
                     flags: this.state.flags += 1,
                     changeAuthorization: false
                 })

                 const configPostObj = {method: "POST",
                     headers: {
                         "Accept": "application/json",
                         "Content-Type": "application/json",
                         "Authorization": `Bearer ${localStorage.jwt}`},
                     body: JSON.stringify({
                         website_id: this.props.website.website.id,
                         user_id: localStorage.userId,
                         flag: true,
                         endorse: false
                     })}
                 
                 fetch(`https://datatrust-api.herokuapp.com/endorsement`, configPostObj)
                     .then(response => response.json())
                     .then(json => {console.log(json)})
             } else {
                 this.handleActionLimit()
             }
        } else {
            this.handleKickback()
        }
    }
    
    // same process as flag, except checking for endorsements. 
    endorse = () => {
        if (!!localStorage.userId){

            if (this.state.changeAuthorization){
                this.setState({
                    endorsements: this.state.endorsements += 1,
                    changeAuthorization: false
                })
                const configPostObj = {method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.jwt}`},
                    body: JSON.stringify({
                        website_id: this.props.website.website.id,
                        user_id: localStorage.userId,
                        flag: false,
                        endorse: true
                    })}
        
                fetch(`https://datatrust-api.herokuapp.com/endorsement`, configPostObj)
                    .then(response => response.json())
                    .then(json => {console.log(json)})
            } else {
                this.handleActionLimit()
            }
        } else {
            this.handleKickback()
        }
    }

    handleKickback = () => {
        this.setState({
            kickback: true
        })
        setTimeout(() => this.setState({kickback: false}), 5000)
    }

    handleActionLimit = () => {
        this.setState({
            actionLimit: true
        })
        setTimeout(() => this.setState({actionLimit: false}), 5000)
    }

    render(){
        return (
            <div>
            <a className="pp-link" target="_blank" href={this.props.website.website.pp_url}><h2>{this.props.website.website.company_name}</h2></a>
            <div className="flag-zone">
                <div>
                    <img className="flag-icon" onClick={this.flag} src={require('../../images/thumbsdown-48.png')}/>
                    <span className="flag-count"> {this.state.flags}</span>
                </div>
                <div>
                    <img className="flag-icon" onClick={this.endorse} src={require('../../images/thumbsup-48.png')}/>
                    <span className="flag-count"> {this.state.endorsements}</span>
                </div>
            </div>

                {this.state.kickback ? <small className="flag-error"><em>sign in to endorse/flag policies</em></small> : null}
                {this.state.actionLimit ? <small className="flag-error"><em>you can only endorse/flag policies once</em></small> : null}
                <div className="policies-container">
                        <NoticePolicy noticePolicy={this.props.website.noticePolicy} 
                                        collectionEntities={this.props.website.collection_entities}
                                        website={this.props.website.website}
                                        requiredInfo={this.props.website.required_info}    
                                        />
                        <ChoicePolicy choicePolicy={this.props.website.choicePolicy}/>
                        <AccessPolicy accessPolicy={this.props.website.accessPolicy}/>
                        <SecurityPolicy securityPolicy={this.props.website.securityPolicy}/>
                </div>
            </div>
        )
    }
}