import React, { Component } from 'react';
import Button from './../components/Button';
import SearchField from './../components/SearchField';

class SearchContainer extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className="searchContainer">
                <SearchField changeHandler={this.props.searchFieldChangeHandler} />
                <Button onClick={this.props.searchClickHandler} />
            </div>
        );
    }
}

export default SearchContainer;