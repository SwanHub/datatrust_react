import React from 'react'

export default class AllPolicies extends React.Component {

    state = {
        input: ''
    }

    filteredPolicies = () => {
        if (this.state.input.length > 0){
            const f = this.props.websites.filter(website => {
                return website.website.company_name.toLowerCase().includes(this.state.input)
            })
            return this.renderPolicies(f)
        } else {
            return this.renderPolicies(this.props.websites)
        }
    }

    renderPolicies = (sites) =>  {
        return sites.map(site => {
            return <p className="list-view-policy" 
                        onClick={() => this.props.showPolicy(site)}>
                        {site.website.company_name }
                    </p>
        })
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    render(){
        return (
            <div>
                <h1>All Policies</h1>
                <input className="browse-filter" type="text" onChange={this.handleChange} value={this.state.input}/>
                {this.filteredPolicies()}
            </div>
        )
    }
}
