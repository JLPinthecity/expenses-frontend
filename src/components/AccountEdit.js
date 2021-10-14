import React from 'react';
import { connect } from 'react-redux';
import { editAccount } from '../actions/editAccount';

class AccountEdit extends React.Component {
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
        let account = {...this.state, id: this.props.account.id}
        this.props.editAccount(account);
        this.setState({
            name: '',
            balance: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Checking Account Name</label>
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>

                    <label>Balance</label>
                    <input type="text" placeholder="balance" name="balance" value={this.state.balance} onChange={this.handleChange}/><br></br>
                
                    <input type="submit" name="Edit"/>
                </form>
            </div>
        )
    }
} 

export default connect(null, { editAccount })(AccountEdit);