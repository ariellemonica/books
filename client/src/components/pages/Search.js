import React from "react";
import API from "../../utils/API";

class Search extends React.Component {
    render(){
    return (
        <div>
            <h1>Search page</h1>
            <form>
                <div className="form-group">
                    <label for="searchTitle">Search for book by title</label>
                    <input type="text" className="form-control" id="searchInputTitle"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )}
}

export default Search;