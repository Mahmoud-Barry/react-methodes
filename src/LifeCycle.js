import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Toto',
            step: 1
        }

        console.log(`Etape ${this.state.step} : je suis dans le construsteur`);
    }
    
    componentDidMount() {
        console.log(`Etape ${this.state.step} : je suis dans le componenetDidMount`)
    }
    

    render() {

        console.log(`Etape ${this.state.step} : je suis dans le render`);
        return (
            <div>
                {
                    console.log(`Etqape ${this.state.step} : mise a jour du dom`)
                }
                <h1>Chargement {this.state.step}</h1>
                <p>Name : {this.state.name}</p>

                <ChildComponent />
            </div>
        )
    }
}

export default LifeCycle;
