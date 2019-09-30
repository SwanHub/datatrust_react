import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css';
import './css/Header.css';
import './css/Footer.css';
import './css/Main.css';
import NavBar from './headerComponents/NavBar'
import Footer from './footerComponents/Footer'
import About from './footerComponents/About'
import Privacy from './footerComponents/Privacy'
import Support from './footerComponents/Support'
import Main from './mainComponents/Main'

class App extends Component {
  
  state = {
      websites: [],
      loggedIn: false,
      currentWebsite: {}, 
      searchInput: '',
      view: 'search',
      username: '',
      userId: 0
  }

  handleInputChange = (event) => {
      this.setState({
          searchInput: event.target.value
      })
  }

  handleSearch = () => {
    const foundWebsite = this.state.websites.find(w => {
      if (!!w.website.company_name){
        return w.website.company_name.toLowerCase().includes(this.state.searchInput.toLowerCase())
      }
    })

    this.setState({
      currentWebsite: foundWebsite,
      view: 'policy'
    })
  }

  showMyPolicies = () => {
    this.setState({
      view: 'myPolicies'
    })
  } 
  
  newPolicy = () => {
    this.setState({
      view: 'newPolicy'
    })
  } 

  myPoliciesList = () => {
    return this.state.websites.filter(website => {
      return website.website.user_id == this.state.userId
    })
  }

  showPolicy = (website) => {
    this.setState({
      currentWebsite: website, 
      view: 'policy'
    })
  }

  browsePolicies = () => {
    this.setState({
      view: 'browse'
    })
  }

  componentDidMount(){
    fetch('https://datatrust-api.herokuapp.com/')
      .then(response => response.json())
      .then(results => {
        this.setState({
          websites: results.websites,
          currentWebsite: {}
        })
      })
  }

  logIn = (login) => {
      localStorage.setItem("jwt", login.jwt)
      this.setState({
          loggedIn: true,
          username: login.user.username,
          userId: login.user.id
      })
  }

  resetMain = () => {
    this.setState({
      view: 'search'
    })
  }

  logOut = () => {
    localStorage.removeItem("jwt")
    this.setState({
      loggedIn: false,
      username: '',
      view: 'search'
    })
  }

  render(){
    if (this.state.websites.length !== 0){
      return (
        <Router>
          <div className="app">
              <NavBar loggedIn={this.state.loggedIn} 
                      logIn={this.logIn}
                      logOut={this.logOut}
                      showMyPolicies={this.showMyPolicies}
                      newPolicy={this.newPolicy}
                      resetMain={this.resetMain}
                      />
                <Route exact path="/" render={() => 
                        <div className="main-content">
                          <Main 
                            website={this.state.currentWebsite} 
                            handleInputChange={this.handleInputChange}
                            view={this.state.view}
                            searchInput={this.state.searchInput} 
                            handleSearch={this.handleSearch}
                            myPoliciesList={this.myPoliciesList}  
                            showPolicy={this.showPolicy}  
                            websites={this.state.websites} 
                            browsePolicies={this.browsePolicies}                        
                          />
                        </div>
                      }
                    /> 
                <Route exact path="/about" component={About}/>
                <Route exact path="/privacy" component={Privacy}/>
                <Route exact path="/support" component={Support}/>
              <Footer />
          </div>
        </Router>
      );
    } else {
      return (
        null
      )
    }
  }
}

export default App;

// redirect (with state change)
// history.push also allows us toredirect on stage change... for this though need to pass in the higher order function withRouter

// routerProps + {...routerProps} == automatic props associated with the router? 
// match url is the key.. 