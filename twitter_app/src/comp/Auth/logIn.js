import React from 'react';
import $ from 'jquery';

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    
    }


  }

  getTheInfo(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name], event.target.value)
  }

  submit(){
    var data = {
      email: this.state.email,
      password: this.state.password,

    }
    $.ajax({
      method: 'POST',
      url:'/signup',
      data : JSON.stringify(data),
      contentType: "application/json",
      success:function(data){
        console.log('Done')
      },
      error: function(err){
        console.log('error:' ,err)
      }
    })
  }

 
  render() {

    return (<div>
      <form action="/home"  className="form">

        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" name="email" required="required" onChange={(e) => this.getTheInfo(e)} />
        </div>
        <br/>
       
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" name="password" required="required" onChange={(e) => this.getTheInfo(e)} />
        </div>
        <br/>

        <div class="form-group">
          <button type="submit" className="btn btn-dark btn-block btn-lg" onClick={() => this.validate()}>Log In</button>
        </div>

      </form>

    </div>
    );
  }
}
export default LogIn;



