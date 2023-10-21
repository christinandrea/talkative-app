import React from 'react'
import './loginForm.css'


const loginForm = () => {
  return (
    <div className='login-box'>
        <div className='login-form'>
            <form>
                <div className='usernameInput'>
                    <label htmlFor="usernameLabel"> Username 
                        <input type="text" name="username" id="username" />
                    </label>
                </div>
                <div className='passwordInput'>

                </div>
            </form>
        </div>
    </div>
  )
}

export default loginForm