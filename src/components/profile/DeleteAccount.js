import React, { Component } from "react";
import { connect } from 'react-redux'
//import { deleteAccount } from "./actions.js"
class DeleteAccount extends Component {
  render() {
    return (
      <div className="delete-account-div">
         <button>delete</button>
      </div>
    );
  }
}

// function mapStateToProps() {
//   return {
   
//   }
// }
// const mapDispatchToProps = {
//   deleteAccount
// }

export default connect(null,null)(DeleteAccount);
