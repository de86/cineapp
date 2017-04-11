import React, { Component } from 'react';
import Button from './../components/Button';
import SearchField from './../components/SearchField';

class SearchContainer extends Component {
    render() {
        return (
            <div className="searchContainer">
                <SearchField changeHandler={this.props.searchFieldChangeHandler} />
                <Button clickHandler={this.props.searchClickHandler} searchString={this.props.searchString} />
            </div>
        );
    }
}

export default SearchContainer;