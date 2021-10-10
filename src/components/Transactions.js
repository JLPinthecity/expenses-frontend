import React from 'react';

const Transactions = (props) => {

    const handleDelete = () => {

    };
 
    return (
        <div>
            {props.transactions && props.transactions.map(transaction => 
            <li key={transaction.id}> {transaction.kind} - {transaction.amount} 
            <button onClick={handleDelete}>Delete</button> </li> )}
        </div>
    )
}

export default Transactions
