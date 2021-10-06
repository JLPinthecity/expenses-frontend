export const createAccount = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/accounts', {

            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(account => dispatch({ type: 'ADD_ACCOUNT', payload: account}))
    }
}

//data comes from the accountInput's local state