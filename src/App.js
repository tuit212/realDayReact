import Header from "./components/Header/Header";
import { Routes , Route , Navigate} from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NotFound from "./common/404/NotFound";
import SingIn from "./components/SingIn/SingIn";
import Wedding from "./Pages/Wedding/Wedding";
import { useState , useEffect } from 'react'
import api from './data/data'


function App() {

  const [posts , setPost] = useState([])

    useEffect(() => {
        const data =  async () => {
            try {
                const res = await api.get('/api/posts')
                setPost(...posts , res.data)
                console.log(res.data);
            }
             catch(err){

            }
        }
        data();
    } )


    
  // const users = true;
  const users = false;

  return (
    <div className="App">
      <Header users={users}/>
      <Routes>
        <Route path="/" element={ <Main/>} />
        <Route path="/login" element={users ? <Navigate to="/" /> : <Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SingIn/>} />
        <Route path="/wedding" element={<Wedding/>} />
        <Route path="*" element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
