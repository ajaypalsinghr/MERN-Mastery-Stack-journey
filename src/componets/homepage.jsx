import { useState } from "react";


function Homepage({product,setProduct,store,setstore}){


const j=()=>{

  let user={
    id:Date.now(),
    productname:product
  }
setstore([...store,user])
setProduct("")
}
  return(
    <div className="bg-blue-300 min-h-screen">
   Enter name <input type="text" placeholder="enter name"value={product} onChange={(e)=>setProduct(e.target.value)} className="bg-white"/>
   <button onClick={j}>sdf</button>
<div>
  {
    store.map((item)=>(
<ol key={item.id}>
  <li>{item.productname}</li>
</ol>
    ))
  }
</div>
    </div>
  )
}
export default Homepage;