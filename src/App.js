import Header from "./components/Header/Header";
import { Routes , Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
