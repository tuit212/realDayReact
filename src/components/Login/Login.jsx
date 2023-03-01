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
                    <div className='learn_btn'>
                        <div className="facebook ler">
                            <i class="fa-brands fa-facebook"></i>
                            <p>Facebook</p>
                        </div>
                        <div className="instagram ler">
                            <i class="fa-brands fa-instagram"></i>
                            <p>Instagram</p>
                        </div>
                        <div className="google ler">
                            <i class="fa-brands fa-google"></i>
                            <p>Google</p>
                        </div>
                    </div>
                    <button type="submit" className='btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
