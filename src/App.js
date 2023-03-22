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
import Invitations from "./Pages/Invitations/Invitations";
import Flowers from "./Pages/Flowers/Flowers";
import WDress from "./Pages/WDress/WDress";
import Artists from "./Pages/Artists/Artists";
import Hairdresser from "./Pages/Hairdresser/Hairdresser";
import DetalsItem from "./common/DetalsItem/DetalsItem";
import WeddingCarsItem from "./common/WeddingCarsItem/WeddingCarsItem";
import WdressItem from "./Pages/WDress/WdressItem";
import InvitationsItem from "./Pages/Invitations/InvitationsItem";
import FlowersItem from "./Pages/Flowers/FlowersItem";
import RingItem from "./Pages/Ring/RingItem";
import Sweets from "./Pages/Sweets/Sweets";
import SweetsItem from "./Pages/Sweets/SweetsItem";

// login
import { useState } from "react";


function App({bool}) {

  const [success , setSuccess] = useState(false);
  // const [success , setSuccess] = useState(true);

  // console.log(success);
  // const users = false;

  

  

  

  

  return (
    <div className="App">
      <Header users={success}/>
      <Routes>
        <Route path="/" element={ <Main/>} />
        <Route path="/login" element={success ? <Navigate to="/" /> : <Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SingIn/>} />
        <Route path="/wedding" element={<Wedding/>} />
        <Route path="wedding/:id" element={<DetalsItem/>} />
        <Route path="/menenjer"  element={<MainGeneral/>} />
        <Route path="/weddingCard"  element={<WeddingCars/>} />
        <Route path="/weddingCard/:id" element={<WeddingCarsItem/>} />
        <Route path="/ring" element={<RIng/>} />
        <Route path="/ring/:id" element={<RingItem/>} />
        <Route path="/multiHeroes" element={<MultiHeroes/>} />
        <Route path="/invitations" element={<Invitations/>} />
        <Route path="/invitations/:id" element={<InvitationsItem/>} />
        <Route path="/flowers" element={<Flowers/>} />
        <Route path="/flowers/:id" element={<FlowersItem/>} />
        <Route path="/weddingDresses" element={<WDress/>} />
        <Route path="/weddingDresses/:id" element={<WdressItem/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/hairdresser" element={<Hairdresser/>} />
        <Route path="/sweets" element={<Sweets/>} />
        <Route path="/sweets/:id" element={<SweetsItem/>} />
        <Route path="*" element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
