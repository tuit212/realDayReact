import React from 'react'
import "./Login.scss"

function Login() {
    return (
        <div className='login'>
            <div id="login">
                <h3>Login</h3>
                <div className="login_input">
                    <div>
                        <label htmlFor="tel">Telefon</label>
                        <input type="tel" id='tel' name='tel'  placeholder='+998 99 999 99 99'  />
                    </div>
                    <div>
                        <label htmlFor="tel">Parol</label>
                        <input type="password" id='password' name='password'  placeholder='****'  />
                    </div>
                    <button type="submit" className='btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
