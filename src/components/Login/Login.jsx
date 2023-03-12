import React from 'react'
import { useRef , useState , useEffect , useContext } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom';
// import UserConText from '../../context/UserContext';
import axios from '../../api/axios';
// const LOGIN_URL = './auth'

function Login() {

    // const {setAuth} = useContext(UserConText)

    const userRef = useRef();
    const errRef = useRef();

    const [user , setUser] = useState('');
    const [pwd , setPwd] = useState('');
    const [errMsg , setErrMsg] = useState('');
    const [success , setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    } , [])

    useEffect(() => {
        setErrMsg('');
    } , [user , pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user , pwd);

        // try {

        //     const response =  await axios.post(LOGIN_URL, JSON.stringify({user , pwd}), {
        //         headers: {'Content-Type' : 'application/json'} ,

        //     })
        // } catch (err) {

        // }

        setUser('');
        setPwd('');
        setSuccess(true)
    }

    
    return (
        <>
            {
                success ? (
                    <section className='login'>
                        <h5>Siz muvaqqiyatli qo'shildiz</h5>
                        <Link to={"/"}>bosh sahifa o'tish</Link>
                    </section>
                ) : (
                    <div className='login'>
                        <div id="login">
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h3>Login</h3>
                            <form onSubmit={handleSubmit} className="login_input">
                                <div>
                                    <label htmlFor="tel">Telefon</label>
                                    <input type="tel" id='tel' name='phone' ref={userRef}  autoComplete="off" 
                                        onChange={(e) => {alert("telifon raqamda xato")}}  placeholder='+998 99 999 99 99'
                                        value={user} required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="tel">Parol</label>
                                    <input type="password" id='password' name='password' 
                                        onChange={(e) => setPwd(e.target.value)}  placeholder='****'
                                        value={pwd}   
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
                                <button type='submit' className='btn'>Login</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
        
    )
}

export default Login
