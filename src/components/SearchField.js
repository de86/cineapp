import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        
        // React ES6 Component does not automatically bind this
        // to itself for it's own functions. We do this in the
        // constructor
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        console.log(event.target.value);
        this.props.changeHandler(event.target.value);
    }
    
    render(){
        return (
            <input type="text" onChange={this.handleChange}></input>
        );
    }
}

export default SearchField;