import React, { Component } from "react";
import { connect } from 'react-redux'
// import { deleteAccount } from "./actions.js"
class DeleteAccount extends Component {
  render() {
    // const {isLoading} = this.props;
    return (
      <div className="delete-account-div">
        <h2>Warning: Deleting your account is permanent.</h2>
        <h3>You will lose complete access to your account.</h3>
        <button onClick={this.props.deleteAccount}> I understand. Please delete my account.</button>
         <button type="submit"  to="/profile">I want to keep my account! Take me back to my account settings.</button>
      {/* disabled={isLoading} */}
      </div>
    );
  }
}

function mapStateToProps() {
  return {
   
  }
}
const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);