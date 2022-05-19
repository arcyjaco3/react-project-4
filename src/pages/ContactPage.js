import React, { Component } from 'react';
import '../styles/ContactPage.css';

class ContactPage extends Component {
    state = {
        value: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value: '' })
    }
    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <div className="contact" >
                <h1>Napisz do nas</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość"></textarea>
                    <br />
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>
            </div>
        );
    }
}

export default ContactPage;