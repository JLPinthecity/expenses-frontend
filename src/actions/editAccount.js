export const editAccount = (data) => {
debugger;
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/accounts/${data.id}`, {

            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            method: 'PATCH', 
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(account => dispatch({ type: 'EDIT_ACCOUNT', payload: account}))
    }
}

//data comes from the accountInput's local state