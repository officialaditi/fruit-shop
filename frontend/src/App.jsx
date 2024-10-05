// import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="flex flex-col mt-[72px]">
       
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
          </Routes>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
};
export default App;
