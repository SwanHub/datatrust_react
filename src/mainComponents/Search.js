import React from 'react'

export default function Search(props) {

    const handleKeyDown = (event) => {
        return event.key === "Enter" ? props.handleSearch() : null
    }

    return (
        <div className="search">
            <input placeholder="Search privacy policy..."   
                    type="text" 
                    value={props.searchInput} 
                    onChange={props.handleInputChange}
                    onKeyDown={handleKeyDown}
                    id="main-searchbar"
                    />
                    <p className="search-subtext">...by company or domain</p>
            <a href="https://chrome.google.com/webstore/category/extensions"
               target="_blank" className="add-extension">Get Extension</a>
            <button onClick={() => props.browsePolicies()}>Browse Policies</button>
        </div>
    )
}
