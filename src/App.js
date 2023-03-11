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
import MainGeneral from "./Pages/MainGeberal/MainGeneral";
import Invitations from "./Pages/Invitations/Invitations";
import Flowers from "./Pages/Flowers/Flowers";
import WDress from "./Pages/WDress/WDress";
import Artists from "./Pages/Artists/Artists";
import Hairdresser from "./Pages/Hairdresser/Hairdresser";
import PagesNav from "./common/PagesNav/PagesNav";



function App({bool}) {

  const {user} = useContext(UserConText)


  console.log(user.password);
  console.log(user.phone);

  window.localStorage.setItem('phone', user.phone)
  window.localStorage.setItem('password', user.password)



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
        <Route path="/menenjer"  element={<MainGeneral/>} />
        <Route path="/weddingCard"  element={<WeddingCars/>} />
        <Route path="/ring" element={<RIng/>} />
        <Route path="/multiHeroes" element={<MultiHeroes/>} />
        <Route path="/invitations" element={<Invitations/>} />
        <Route path="/flowers" element={<Flowers/>} />
        <Route path="/weddingDresses" element={<WDress/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/hairdresser" element={<Hairdresser/>} />
        <Route path="/s" element={<PagesNav/>} />
        <Route path="*" element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
