import React from 'react'
import firebaseEvents from '../firebaseConfig'

export default class Test extends React.Component{
  constructor(){
    super()
    this.state={
      email:''
    }
  }

  emailValue=(e)=>{
    
    this.setState({
      email:e.target.value
    })
  }


submit=()=>{
   console.log(this.state.email+'........button is clicked')
    firebaseEvents.emailVerify(this.state.email)
  }

  render(){
    return(
      <div>
          <label><b>Email</b></label><br/><br/>
              <input type="email" placeholder="Email address"  value={this.state.email} onChange={this.emailValue} required/><br/><br/>

              <button type='submit'  onClick={this.submit} >GET VERIFIED NOW</button>
      </div>
    )
  }
}