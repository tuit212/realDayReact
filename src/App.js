import Header from "./components/Header/Header";
import { useContext  , useEffect , useState} from "react";
import { Routes , Route , Navigate} from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NotFound from "./common/404/NotFound";
import SingIn from "./components/SingIn/SingIn";
import Wedding from "./Pages/Wedding/Wedding";
import UserConText from "./context/UserContext";
import api from './data/data'
import WeddingCars from "./Pages/WeddingCars/WeddingCars";
import RIng from "./Pages/Ring/RIng";
import MultiHeroes from "./Pages/MultiHeroes/MultiHeroes";


function App({bool}) {

  const {user} = useContext(UserConText)


  console.log(user.password);
  console.log(user.phone);

  window.localStorage.setItem('phone', user.phone)
  window.localStorage.setItem('password', user.password)

  // const phone = window.localStorage.getItem('phone')
  // const password = window.localStorage.getItem('password')


  const [admin  , setAdmin] = useState()

  useEffect(() => {
    const apiUser  = async () => {
      try {
        const res  = await api.get('/posts')
        setAdmin(res.data)
        let pppp = res.data
        console.log(pppp);
      } catch (err) {
      }
    }
    apiUser();
  } , [])

  console.log(admin);

  const change = admin
  // for (let i = 0; i <change.length ; i++) {
    //   }
    
  console.log(change);
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
        <Route path="/weddingCard"  element={<WeddingCars/>} />
        <Route path="/ring" element={<RIng/>} />
        <Route path="/multiHeroes" element={<MultiHeroes/>} />
        <Route path="*" element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
