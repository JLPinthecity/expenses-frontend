export default function accountReducer(state = {accounts: []}, action) {
debugger
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return  state
    
        default:
            return state;
    }

}

//why is it good to always have a default? we want it to return some version of our state