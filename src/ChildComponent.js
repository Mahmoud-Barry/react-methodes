import React, { Component } from 'react'

class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

        }

        console.log("je suis dans le constructor enfant");
    }

    componentDidMount() {
        console.log("je suis dans le componenetDidMount enfants");
    }
    

    render() {
        console.log("je suis dans le render enfant");
        return (
            <div>
                {console.log("mise a jour dom dans le composnet parent")}
            </div>
        )
    }
}

export default ChildComponent;
