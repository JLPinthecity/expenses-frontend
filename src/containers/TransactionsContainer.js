import React from 'react';
import TransactionInput from '../components/TransactionInput';
import Transactions from '../components/Transactions';

class TransactionsContainer extends React.Component {

    render(){
        return (
            <div>
                <Transactions/>
                <TransactionInput/>
            </div>
        )
    }
}

export default TransactionsContainer