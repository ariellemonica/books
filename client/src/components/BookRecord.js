import React from "react";
import API from "../utils/API";

class BookRecord extends React.Component {
    handleSaveBook = (event) => {
        // event.preventDefault();
        const { _id, title, authors, description, image, link } = this.props;
        console.log( {_id, title, authors, description, image, link} );
        // change the state to saved? add it do db? 

        API.saveBook({ _id, title, authors, description, image, link });

    }

    render() {
        return (
            <div className="card col-3">
                <img className="card-img-top" src={this.props.image} alt={this.props.title} />
                <div className="card-body"></div>
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <a className="btn btn-primary" href={this.props.link} target="_blank">Details</a>
                <button onClick={this.handleSaveBook} type="button" className="btn btn-success">Save Book</button>
            </div>
        )
    }
}

export default BookRecord;