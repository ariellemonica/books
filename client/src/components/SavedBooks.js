import React from "react";
import BookRecord from "./BookRecord";

class SavedBooks extends React.Component {
    state = {
        savedBooks: [API.getBooks({ _id, title, authors, description, image, link })]
    }

    handleDeleteBook = (event) => {
        const { _id, title, authors, description, image, link } = this.props;
        console.log({ _id, title, authors, description, image, link });
        // change the state to saved? add it do db? 

        API.deleteBook({ _id, title, authors, description, image, link });
    }

    // componentDidMount() {
    //     fetch("api/books")
    //     .then(res => res.json())
    //     .then(data => {
    //         //console log the books that return as saved
    //         console.log(data);
    //         this.setState({
    //             savedBooks: data
    //         })
    //     })
    // }

    render() {
        // return cards for saved books here
        // return stuff - use same code you use in Search.js ... once you write it :) but it'll be this.state.savedBooks.map 
        return (
            <div className="row">
                {this.state.savedBooks.map(bookItem => {
                    <BookRecord
                        key={bookItem.id}
                        _id={bookItem.id}
                        title={bookItem.title}
                        authors={bookItem.authors}
                        description={bookItem.description}
                        image={bookItem.imageLinks.thumbnail}
                        link={bookItem.infoLink}
                    />
                })}
            </div>
            // <div className="card col-3">
            //     <img className="card-img-top" src={this.props.image} alt={this.props.title} />
            //     <div className="card-body"></div>
            //     <h5 className="card-title">{this.props.title}</h5>
            //     <p className="card-text">{this.props.description}</p>
            //     <a className="btn btn-primary" href={this.props.link} target="_blank">Details</a>
            //     <button onClick={this.handleDeleteBook} type="button" className="btn btn-success">Delete Book</button>
            // </div>
        )
    }
}

export default SavedBooks;