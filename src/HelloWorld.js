import React from "react";

class HelloWorld extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {

        console.log("we are called");
        return (
            <div>
                <h1>Welcome to Home page</h1>
                <div>
                    <h2>Hey mr. How was your day?</h2>
                </div>
                <div>
                    <p>Welcome to the universe world.</p>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
