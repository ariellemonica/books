import React from "react";
import BookRecord from "../BookRecord";
import API from "../../utils/API";

class Search extends React.Component {
    state = {
        searched: "",
        books: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searched);
        API.googleSearch(this.state.searched).then((response) => {
            console.log(response.data);
            this.setState({
                books: response.data
            })
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
                <div className="row">
                    {this.state.books.map(bookItem => (
                        <BookRecord
                            key={bookItem.id}
                            _id={bookItem.id}
                            title={bookItem.volumeInfo.title}
                            authors={bookItem.volumeInfo.authors}
                            description={bookItem.volumeInfo.description}
                            image={bookItem.volumeInfo.imageLinks.thumbnail}
                            link={bookItem.volumeInfo.infoLink}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

export default Search;