import React from 'react';
import {connect} from 'react-redux';
import AccountsContainer from './containers/AccountsContainer';

class App extends React.Component{

  componentDidMount() {
    this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}} )
  }

  render() {
    return (
      <div>
        <AccountsContainer/>
      </div>
    );
  };
};

export default connect()(App);

//mapStateToProps gives us access to the store 
//mapDispatchToProps gives us the ability to dispatch new actions from component 