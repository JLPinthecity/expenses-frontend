import React from 'react'

const Account = (props) => {
    console.log(props)

    let account = props.accounts[props.match.params.id - 1]

    return (
        <li>
            {account.name} - {account.balance}
        </li>
    )


}

export default Account