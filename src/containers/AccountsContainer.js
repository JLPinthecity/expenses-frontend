import React from 'react'
import Accounts from '../components/Accounts';
import Account from '../components/Account'
import AccountInput from '../components/AccountInput';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchAccounts} from '../actions/fetchAccounts'

class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }

    //from here, goes to action creator

    render() {
        return (
            <div>
                <Route path='/accounts/new' component={AccountInput}/>
                <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>} />
                <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>} />
                
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);