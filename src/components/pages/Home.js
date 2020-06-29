import React from "react";

function Home(){
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Home Page</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"></hr>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <button className="btn btn-primary btn-lg" href="google.com" style={{margin: 10}}>Search</button>
                <button className="btn btn-primary btn-lg" href="google.com" style={{margin: 10}}>Saved</button>
            </div>
        </div>
    )
}

export default Home;