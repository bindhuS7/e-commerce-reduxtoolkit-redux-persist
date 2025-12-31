import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import NavBar from "./components/Nav/NavBar";

const App=()=>{


  return(
    <BrowserRouter>
    <NavBar/>
   <Routes>
   <Route path="/products" element={<Products/>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App;