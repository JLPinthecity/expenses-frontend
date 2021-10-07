import React from 'react';
import Account from './Account';

const Accounts = ({accounts}) => {

    return (
        <div>
            {accounts.map(account => 
            <Account account={account} key={account.id} /> )}
        </div>
    )
}

export default Accounts