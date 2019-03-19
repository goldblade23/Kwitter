/////////ALL OF THIS TEXT WAS MOVED TO PROFILEPAGE IN A COMPONENT//////


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import './App.css';
// import { uploadUserPic } from "../../actions/auth"
// class UserPic extends Component {
// state = {
//     active: false,
//     selectedFile: null
// }
//     fileChangeHandler = event => {
//         console.log(event.target.files[0])
//         this.setState({
//             fileBeingChanged:event.target.files[0]
//         })
//     }

//     fileUploadHandler = () => {
//         picture.post(' ')
//     }

//     handleToggle = () => {
//         this.setState(prevState => ({
//             active: !prevState.active;
//         }))
//     }

   
//     render() {
//         return (
//             <div className="profile-user-pic-div">
//               <input type="file" name = "picture" accept = "image/*" onChange={this.fileChangeHandler} />
//               <button onClick={this.fileUploadHandler}>Upload a Photo</button>
//             </div>

//         )}
// }

// const mapDispatchToProps = dispatch => ({
//     uploadUserPic: picture => dispatch()
// })
// export default connect(mapDispatchToProps, null)(UserPic)