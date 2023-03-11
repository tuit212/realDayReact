import Header from "./components/Header/Header";
import { Routes , Route , Navigate} from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NotFound from "./common/404/NotFound";
import SingIn from "./components/SingIn/SingIn";
import Wedding from "./Pages/Wedding/Wedding";
import WeddingCars from "./Pages/WeddingCars/WeddingCars";
import RIng from "./Pages/Ring/RIng";
import MultiHeroes from "./Pages/MultiHeroes/MultiHeroes";
import MainGeneral from "./Pages/MainGeberal/MainGeneral";
import StageDecoration from "./Pages/StageDecoration/StageDecoration.jsx";
import Invitations from "./Pages/Invitations/Invitations";
import Flowers from "./Pages/Flowers/Flowers";
import WDress from "./Pages/WDress/WDress";
import Artists from "./Pages/Artists/Artists";
import Hairdresser from "./Pages/Hairdresser/Hairdresser";
import DetalsItem from "./common/DetalsItem/DetalsItem";
import WeddingCarsItem from "./common/WeddingCarsItem/WeddingCarsItem";
import StageDecorationItem from "./Pages/StageDecoration/StageDecorationItem";



function App({bool}) {

  
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
        <Route path="wedding/:id" element={<DetalsItem/>} />
        <Route path="/menenjer"  element={<MainGeneral/>} />
        <Route path="/weddingCard"  element={<WeddingCars/>} />
        <Route path="/weddingCard/:id" element={<WeddingCarsItem/>} />
        <Route path="/ring" element={<RIng/>} />
        <Route path="/multiHeroes" element={<MultiHeroes/>} />
        <Route path="/stageDecoration" element={<StageDecoration/>} />
        <Route path="/stageDecoration/:id" element={<StageDecorationItem/>} />
        <Route path="/invitations" element={<Invitations/>} />
        <Route path="/flowers" element={<Flowers/>} />
        <Route path="/weddingDresses" element={<WDress/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/hairdresser" element={<Hairdresser/>} />
        <Route path="*" element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
