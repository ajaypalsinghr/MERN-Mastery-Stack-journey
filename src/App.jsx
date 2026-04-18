import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componets/navbar/NavBar";
import Homepage from "./componets/homepage";
import FakeApi from "./componets/fackapi";
import My from "./componets/my";
function App()
{
const [product,setProduct]=useState("")
  const [store,setstore]=useState(()=>{

  const savedMenu = localStorage.getItem("myData");
  return savedMenu ? JSON.parse(savedMenu) : [];
});
// useEffect(()=>{
// const jsonData=JSON.stringify(store);
// localStorage.setItem("myData",jsonData)
// },[store])
useEffect(()=>{
  localStorage.setItem("myData",JSON.stringify(store))
},[store])
  return(
    <>
    <Router>
     <Navbar></Navbar>
      <Routes>
      <Route path="/home" element={<Homepage product={product} setProduct={setProduct} store={store} setstore={setstore}/>} />
  <Route path="/fakeapi" element={<FakeApi/>} />
    <Route path="/my" element={<My/>} />
      </Routes>
    </Router>
    </>
  )
}
export default App;