import React, { Component } from 'react';
import '../styles/AdminPage.css'

class AdminPage extends Component {
    state = {
        login: '',
        password: '',
        check: false,
    }


    handleLogin = (e) => {
        this.setState({ login: e.target.value })
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    handleCheck = (e) => {
        this.setState({ check: e.target.checked })
    }

    render() {
        return (
            <div className='login'>
                <h1>Logowanie</h1>
                <input
                    type='text'
                    name='text'
                    value={this.state.login}
                    placeholder='Wprowadz login'
                    onChange={this.handleLogin}
                />
                <br />
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    placeholder='Wprowadz hasło'
                    onChange={this.handlePassword}
                />
                <br />
                <button>Zaloguj</button>
            </div>
        );
    }
}

export default AdminPage;

