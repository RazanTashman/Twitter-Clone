import React from 'react';
import $ from 'jquery';
class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      passwordError:"",
      emailError : "",
      usernameError : "",

    }


  }

  validate () {
    // let usernameError = "";
    // let emailError = "";
    // let passwordError = "";
  
    if (!this.state.username) {
      // this.state.usernameError = "Username required ";
      this.setState({ usernameError: "Username required " });

    }
    if (!this.state.email) {
      this.state.emailError = "Email required ";
    }
    if (!this.state.password) {
      this.state.passwordError = "Password required ";
    }
    if (!this.state.email.includes("@") && this.state.email !== "") {
      this.state.emailError = "invalid email";
    }
    if (this.state.password.length < 8  && this.state.password !== "" ) {
      this.state.passwordError = "Password must be longer than 8 characters";
    }
  
    if ( this.state.emailError ||  this.state.usernameError ||  this.state.passwordError) {
      this.setState({ emailError: this.state.emailError, usernameError: this.state.usernameError , passwordError: this.state.passwordError});
      // return false;
    }else{
  this.submit()}
  
  };


  submit(){
    var data = {
      email: this.state.email,
      password: this.state.password,
      password: this.state.firstName,
      password: this.state.lastName,
      password: this.state.image,

    }
    $.ajax({
      method: 'POST',
      url:'/signup',
      data : JSON.stringify(data),
      contentType: "application/json",
      success:function(data){
        console.log(data)
      },
      error: function(err){
        console.log('error:' ,err)
      }
    })
  }


  getTheInfo(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name], event.target.value)
  }
  render() {

    // const mystyle = {
    //   width: "550px",
    //   marginLeft: "450px",
    //   marginTop: "180px"
    //   // padding: "10px"
    // };

    return (<div>
      <form action="/login"  className="form">
        {/* <div class="form-header">  </div> */}

        <div class="form-group">
          <input type="text" class="form-control" placeholder="First Name" name="firstName" required="required" onChange={(e) => this.getTheInfo(e)} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.usernameError}
          </div>
        </div>
        <br/>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Last Name" name="lastName" required="required" onChange={(e) => this.getTheInfo(e)} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.usernameError}
          </div>
        </div>
        <br/>

        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" name="email" required="required" onChange={(e) => this.getTheInfo(e)} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <br/>
       
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" name="password" required="required" onChange={(e) => this.getTheInfo(e)} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <br/>

     
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" name="image" onChange={(e) => this.getTheInfo(e)} />
          <label class="custom-file-label" for="customFile">Pick your image...</label>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <br/><br/>

        <div class="form-group">
          <button type="submit" className="btn btn-dark btn-block btn-lg" onClick={() => this.validate()}>Sign Up</button>
        </div>

      </form>

    </div>
    );
  }
}
export default SignUp;



