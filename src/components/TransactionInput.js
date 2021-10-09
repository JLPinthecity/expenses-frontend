import React from 'react';
import {connect} from 'react-redux'

class TransactionInput extends React.Component {
    state = {
        kind: 'deposit',
        amount: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

    
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Transaction Type:
                    </label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>deposit</option>
                        <option>withdrawal</option><br></br>
                    </select>
                    <label>
                        Transaction Amount:
                    </label>
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(TransactionInput);