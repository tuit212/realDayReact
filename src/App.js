import Header from "./components/Header/Header";
import { Routes , Route , Navigate} from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NotFound from "./common/404/NotFound";
import SingIn from "./components/SingIn/SingIn";


function App() {

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
        <Route path="*" element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
