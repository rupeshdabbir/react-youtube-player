import React, { Component } from 'react';

class SearchBar extends Component {

    //define constructor

    constructor(props){
        super(props);

        this.state = {term: 'Demo'};
    }

    //Controlled components
    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={ (e)=> this.setState({term: e.target.value}) }
                />
            </div>

        );
    }

}

export default SearchBar;