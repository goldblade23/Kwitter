import React, { Component } from "react";
import { connect } from "react-redux";
// import { uploadUserPic }   from "../../actions/users"
import { Card, CardComponent, Image } from 'semantic-ui-react'
class UserPic extends Component {

  state = {
    active: false,
    file: null
  }
  imageFileChangeHandler = event => {
    console.log(event.target.imageFiles[0])
    const imageFile = event.target.imageFiles[0]
    this.setState({
      imageFile
    })
  }

  imageFileUploadHandler = event => {
    const imageFile = this.state.imageFile;
    this.handleToggle()
    this.props.uploadUserPic({ picture: imageFile })
    //  picture.post(' ')//this should be url for api
  }

  handleToggle = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render() {
    return (
      <React.Fragment>
       <div className="profileUserPicDiv"></div>
       <div className="profile-user-pic"></div>
       <Card>
         <Image src={this.props.picture} alt="" style={{ maxHeight: "150px", maxWidth: "150px" }} />
         <Card.Content>
           <Card.Header>{this.props.displayName}</Card.Header>
           <Card.Description>{this.props.about}</Card.Description>
           <input type="file" name="pic" accept="image/*" onChange={this.imageFileChangeHandler} />{" "}
           <button onClick={this.imageFileUploadHandler} onSubmit={this.handleUpdate}>Upload a Photo</button>
         </Card.Content>
       </Card>
{/*         
           {" "}
              <img
                alt=""
                src={this.props.image}
                style={{ maxHeight: "150px", maxWidth: "150px" }}
              />{" "}  */}
      </React.Fragment>
     );
  }
 }

const mapDispatchToProps = dispatch => ({
  // uploadUserPic: file => dispatch(uploadUserPic(file))
})

export default connect(
  ({ users, auth }) => ({
    image: users.usersImages[auth.login.id]
  }),
  null, mapDispatchToProps
)(UserPic);
