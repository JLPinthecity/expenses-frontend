import React from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../actions/createAccount';

class AccountInput extends React.Component {
    state = {
        name: '',
        balance: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //it's in brackets, to evaluate whether it's name or balance and sets it as the key


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createAccount()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Checking Account Name</label>
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>

                    <label>Balance</label>
                    <input type="text" placeholder="balance" name="balance" value={this.state.balance} onChange={this.handleChange}/><br></br>
                
                    <input type="submit" />
                </form>
            </div>
        )
    }
} 

export default connect(null, { createAccount })(AccountInput);