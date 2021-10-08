import React from 'react'
import { Redirect } from 'react-router-dom';
import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

    let account = props.accounts[props.match.params.id - 1]
    console.log(account)

    return (
        <div>
            <h2>
                {account ? account.name : null} - {account ? account.balance : null}
            <TransactionsContainer/>
            </h2>
        </div>
    )


}

export default Account