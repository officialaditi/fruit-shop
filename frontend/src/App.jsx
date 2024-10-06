import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="flex flex-col mt-[72px]">
       
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/fruits" element={<ProductScreen/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
};
export default App;
