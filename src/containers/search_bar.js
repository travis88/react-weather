import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onSubmitForm(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="input-group"
                  onSubmit={this.onSubmitForm}>
                <input className="form-control"
                       type="text"
                       placeholder="Введите город"
                       value={this.state.term}
                       onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}