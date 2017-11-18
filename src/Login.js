import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div 
        className='ui middle aligned center aligned grid' 
        style={{ padding: '50px 0 0 50px', width: '500px' }}>
        <div className='column'>
          <h2 className='ui teal header'>Login</h2>
          <form className='ui large form'>
            <div className='ui stacked segment'>
            
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input type='text' name='email' placeholder='Username' />
                </div>
              </div>

              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' name='password' placeholder='Password' />
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
