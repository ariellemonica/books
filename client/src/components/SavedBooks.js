import React from "react";
import BookRecord from "./BookRecord";

class SavedBooks extends React.Component {
    state = {
        savedBooks: []
    }
    
    componentDidMount() {
        fetch("api/books")
        .then(res => res.json())
        .then(data => {
            //console log the books that return as saved
            console.log(data);
            this.setState({
                savedBooks: data
            })
        })
    }

    render(){
        <h1>These are the saved books ... </h1>
        // return cards for saved books here
        // return stuff - use same code you use in Search.js ... once you write it :) but it'll be this.state.savedBooks.map 
    }

}

export default SavedBooks;