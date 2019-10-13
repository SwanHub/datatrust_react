import React from 'react'

export default function Search(props) {

    const filteredPolicies = () => {
        const f = props.websites.filter(website => {
            return website.website.company_name.toLowerCase().includes(props.searchInput)
        })

        if (f.length > 0){
            return renderPolicies(f)
        } else {
            return <p>No matching sites...</p>
        }
    }

    const renderPolicies = (sites) =>  {
        return sites.map(site => {
            return <p className="main-page-search-result" onClick={() => props.showPolicy(site)}>
                        {site.website.company_name }
                    </p>
        })
    }

    const handleKeyDown = (event) => {
        return event.key === "Enter" ? props.handleSearch() : null
    }

    if (props.searchInput.length > 0){
        return (
            <div className="search">
                <input placeholder="Search privacy policy..."   
                        type="text" 
                        value={props.searchInput} 
                        onChange={props.handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        id="main-searchbar"
                        />
                    <div className="main-page-filter-box">{filteredPolicies()}</div>
            </div>
        )
    } else {
        return(
        <div className="search">
                <input placeholder="Search privacy policy..."   
                        type="text" 
                        value={props.searchInput} 
                        onChange={props.handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        id="main-searchbar"
                        />
                {props.error 
                        ? <p className="error">Couldn't find a match... please browse policies below</p>
                        : <p className="search-subtext">...by company or domain</p>}
                <a 
                    href="https://chrome.google.com/webstore/category/extensions"
                    target="_blank" 
                    className="add-extension">Get Extension</a><br />
                <button onClick={() => props.browsePolicies()}>Browse Policies</button>
        </div>
        )
    }
}
