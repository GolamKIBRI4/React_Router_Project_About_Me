import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./Layout/RootLayout";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path="Products" element={<Products/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
   </Route> 
  ))
  return ( 
    <>
       <RouterProvider router={router} />
      
    </>
  );
}

export default App;
