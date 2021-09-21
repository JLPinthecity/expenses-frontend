import React from 'react';
import AccountsContainer from './containers/AccountsContainer';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <AccountsContainer/>
      </div>
    );
  };
};

export default (App);

//mapStateToProps gives us access to the store 
//mapDispatchToProps gives us the ability to dispatch new actions from component 