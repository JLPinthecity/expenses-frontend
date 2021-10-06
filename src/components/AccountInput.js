import React from 'react'

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

    render() {
        return (
            <div>
                <form>
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

export default AccountInput;