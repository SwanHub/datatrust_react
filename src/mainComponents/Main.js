import React from 'react'
import Search from './Search'
import PoliciesContainer from './policies/PoliciesContainer'
import MyPoliciesContainer from './myPolicies/MyPoliciesContainer'
import AllPolicies from './AllPolicies'

export default function Main(props) {
    switch(props.view) {
        case 'search':
        return <Search searchInput={props.searchInput} 
            handleInputChange={props.handleInputChange}
            handleSearch={props.handleSearch}
            browsePolicies={props.browsePolicies}
            />
        case 'policy':
          return <PoliciesContainer website={props.website}/>;
        case 'myPolicies':
          return  <MyPoliciesContainer myPoliciesList={props.myPoliciesList}/>;
        case 'browse':
          return  <AllPolicies websites={props.websites} showPolicy={props.showPolicy}/>;
        default:
          return null;
      }
}
