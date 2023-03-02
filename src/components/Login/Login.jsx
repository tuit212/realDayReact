import React from 'react'
import "./Login.scss"
import { useState  } from 'react'

function Login() {

    
    const [state , setState] = useState({
        phone :null,
        password: null,
    })

    
    const onSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem('password', state.password);
        window.localStorage.setItem('phone', state.phone);

        window.localStorage.getItem("loginValue" , state.password)

        // if(state.phone === posts.phone && state.password === posts.password) {
        //     console.log("true")

        // } else {
        //     console.log("err");
        // }
    }

    return (
        <div className='login'>
            <div id="login">
                <h3>Login</h3>
                <div className="login_input">
                    <div>
                        <label htmlFor="tel">Telefon</label>
                        <input type="tel" id='tel' name='tel'   placeholder='+998 99 999 99 99' onChange={
                            (evt) => setState({...state , phone : evt.target.value})
                        }  />
                    </div>
                    <div>
                        <label htmlFor="tel">Parol</label>
                        <input type="password" id='password' name='password'  placeholder='****' 

                        onChange={
                            (evt) => setState({...state , password : evt.target.value})
                        } 

                          />
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
                    <button type="submit" className='btn' onClick={onSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
