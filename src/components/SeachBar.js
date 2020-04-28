import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term:'cars'};

    }
    onInputChange(event) {
        console.log(event.target.value)
    }

    componentDidUpdate() {
        // console.log(this.state.term);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" action="" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term:e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;