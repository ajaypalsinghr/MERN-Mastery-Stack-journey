import { useEffect, useState } from "react";
function FakeApi()
{
  const [my,setTodo]=useState([])
  const [originalData,setoriginalData]=useState([])
useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/todos/').then((res)=>{
 return res.json()
  }).then((data)=>{
console.log(data )
let limitdata=data.slice(10,21)
let userfilter=limitdata.filter(item=>item.completed===true)

setTodo(userfilter)
})
},[])
const handle=()=>{
  setTodo([...my,...originalData])
}
  return(
  <div>
    <div className="p-2 m-2 bg-red-500 min-h-screen ">
<div>
  <h1>studdent data</h1>
  {
    my.map((todo,index)=>(
      <div key={index}>
  <p>userId={todo.userId}</p>
    <p>Id={todo.id}</p>
      <p>title={todo.title}</p>
        <p>completed={todo.completed?"right":"wrong"}</p>
  </div>
    ))
  }
</div>
<button onClick={handle}>oncf</button>
    </div>

  </div>
  )
}
export default FakeApi;
