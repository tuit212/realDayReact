import React from 'react'
import { useContext } from 'react'
import "./Login.scss"
import UserConText from "../../context/UserContext"


function Login() {



    const  {user , setUser} = useContext(UserConText)

    const changInput = (evt) => {
        setUser({...user, [evt.target.name]: evt.target.value})
        
        
    }

    
    return (
        <div className='login'>
            <div id="login">
                <h3>Login</h3>
                <div className="login_input">
                    <div>
                        <label htmlFor="tel">Telefon</label>
                        <input type="tel" id='tel' name='phone'   placeholder='+998 99 999 99 99'
                            onChange={changInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="tel">Parol</label>
                        <input type="password" id='password' name='password'  placeholder='****'
                            onChange={changInput}
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
                    <button className='btn' onClick={changInput} >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
