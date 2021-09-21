
export function fetchAccounts() {
    
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts') 
    .then(response => response.json())
    .then(accounts => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts 
        }))
    }  
}

//step 2 goes here and fetch accoutn from backend
//once that response comes back, we turn it into json
//then we dispatch an action object to our reducer


//this is an action creator 
//dispatch(actionObject)
//action creator creates an actionObject

//thunk allows us to return a function + pass in dispatch as an argument so we can use it later once the fetch is done


