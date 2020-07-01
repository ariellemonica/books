import React from "react";
import BookRecord from "./BookRecord";

class SavedBooks extends React.Component {
    handleDeleteBook = (event) => {
        const { _id, title, authors, description, image, link } = this.props;
        console.log( {_id, title, authors, description, image, link} );
        // change the state to saved? add it do db? 

        API.deleteBook({ _id, title, authors, description, image, link });
    }
    // state = {
    //     savedBooks: []
    // }
    
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

    render(){
        // return cards for saved books here
        // return stuff - use same code you use in Search.js ... once you write it :) but it'll be this.state.savedBooks.map 
        return (
            <div className="card col-3">
                <img className="card-img-top" src={this.props.image} alt={this.props.title} />
                <div className="card-body"></div>
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <a className="btn btn-primary" href={this.props.link} target="_blank">Details</a>
                <button onClick={this.handleDeleteBook} type="button" className="btn btn-success">Delete Book</button>
            </div>
    }

}

export default SavedBooks;