import React from 'react';
import ReactDOM from 'react-dom'
class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: 'Birat'
        }
        console.log('constructor');
    }

    // componentDidMount () {
    //     console.log('componentDidMount');
    //     console.log(this.setState({name: 'Raju'}));
        
    // }

    // componentWillMount() {
    //     console.log(this.setState({name: 'Raja'}));
    //     console.log('componentWillMount');
        
    // }

 
    render() {
        console.log('render');
        return (
            <>
                <h1>Hi your name is {this.state.name}</h1>
                <h4>Access me</h4>
                
                
                
            </>
        )
    }
}

export default React.memo(LifeCycle) 