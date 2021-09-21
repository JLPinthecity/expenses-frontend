import React from 'react'

const Accounts = ({accounts}) => {

    return (
        <div>
            {accounts.map(account => <li>{account.name} = {account.balance} </li>)}
        </div>
    )
}

export default Accounts