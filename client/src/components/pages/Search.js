import React from "react";
import API from "../../utils/API";

class Search extends React.Component {
    state = {
        searched: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        console.log(this.state.searched);
        API.googleSearch(this.state.searched).then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <h1>Search page</h1>
                <form>
                    <div className="form-group">
                        <label for="searchTitle">Search for book by title</label>
                        <input name="searched" value={this.state.searched} onChange={this.handleInputChange} type="text" className="form-control"></input>
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Search;