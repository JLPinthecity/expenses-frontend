export default function accountReducer(state = {accounts: []}, action) {

    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return  {accounts: action.payload}
    
        default:
            return state;
    }

}

//why is it good to always have a default? we want it to return some version of our state
//whatever we return from our reducer is our new redux state