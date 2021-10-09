import React from 'react';
import {connect} from 'react-redux'

class TransactionInput extends React.Component {
    state = {
        kind: '',
        amount: ''
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Transaction Type:
                    </label>
                    <select>
                        <option>deposit</option>
                        <option>withdrawal</option>
                    </select>
                    <label>
                        Transaction Amount:
                    </label>
                    <input type="text"/>
                </form>
            </div>
        )
    }
}

export default connect()(TransactionInput);