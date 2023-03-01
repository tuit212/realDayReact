import React from 'react'
import './SinIn.scss'
import '../Login/Login.scss'


function SingIn() {
    return (
        <div className='singIN'>
            <div id="singIN">
                <h3>Registratsiya</h3>
                <div className="login_input">
                    <div>
                        <label htmlFor="name">Ism</label>
                        <input type="text" id='name' name='name'  placeholder='dim'  />
                    </div>
                    <div>
                        <label htmlFor="text">Familiya</label>
                        <input type="text" id='text' name='text'  placeholder='dim ann'  />
                    </div>
                    <div>
                        <label htmlFor="tel">Telefon</label>
                        <input type="tel" id='tel' name='tel'  placeholder='+998 99 999 99 99'  />
                    </div>
                    <div>
                        <label htmlFor="manzil">Manzil</label>
                        <input type="text" id='manzil' name='manzil'  placeholder='nyu york'  />
                    </div>
                    <button type="submit" className='btn'>REGISTRATSIYA</button>
                </div>
            </div>
        </div>
    )
}

export default SingIn
