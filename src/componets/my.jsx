import { useEffect, useState } from "react";
function My()
{ 
     const [userData,setUserData]=useState(
      {rollno:"",name:"",email:"",password:""}
     )
     const [allData,setAllData]=useState(()=>{
      const saveData=localStorage.getItem("userdatas")
      return saveData?JSON.parse(saveData):[]
     });

useEffect(()=>{
  localStorage.setItem("userdatas",JSON.stringify(allData))
},[allData])


      const handle=(e)=>{
let {name,value}=e.target;
setUserData((prev)=>({...prev,[name]:value}))
console.log(name,value);
  }
  const handleSubmit=(e)=>{

e.preventDefault();
let user={
  ...userData,id: Date.now(),
  nam:"ajaypalll",
}
if(!userData.name || !userData.email)
{
  return alert("please fill the details");
}
console.log([...allData,user
])
setAllData([...allData,user])
  }
  const handleDelete=(id)=>{
 setAllData(allData.filter((item)=>item.id!==id))
  }
  return(
    <>
    <div className=" shadow-lg flex flex-col md:flex-row ">
      <div className="bg-amber-200 shadow-lg p-2 shadow-black ml-3 text-center rounded-2xl">
          <div className="p-2 flex items-center">
        <label htmlFor="rollno" className = "px-4 w-20" >RollNo:</label>
        <input type="number"placeholder="enter roll no."value={userData.rollno}name="rollno" onChange={handle} className="bg-amber-50 border-2 shadow-lg shadow-green-600 w-50 focus:ring-blue-500"/>
        </div>
        <div className="p-2 flex items-center">
        <label htmlFor="text"className = "px-4 w-20">Name:</label>
        <input type="text"placeholder="enter name" value={userData.name} name="name" onChange={handle} className="bg-white border-2 shadow-lg bg-amber-50 border-2 shadow-lg shadow-green-600 w-50"/>
        </div>
         <div className="p-2 flex items-center">
        <label htmlFor="email" className = "px-4 w-20">Email:</label>
        <input type="email"placeholder="enter Email"value={userData.email}name="email" onChange={handle} className="bg-amber-50 border-2 shadow-lg bg-amber-50 border-2 shadow-lg shadow-green-600 w-50"/>
        </div>
             <div className="p-2 flex items-center">
        <label htmlFor="password" className = "px-4 w-20">password:</label>
        <input type="password"placeholder="enter pasword"value={userData.pasword}name="password" onChange={handle} className="bg-amber-50 border-2 shadow-lg bg-amber-50 border-2 shadow-lg shadow-green-600 w-50"/>
        </div>
        <button className="bg-blue-700 text-white px-4 py-1 rounded-2xl border-2 border-black shadow-amber-400 shadow-lg hover:bg-black"onClick={handleSubmit}>Save</button>
      </div>
    </div>
    <div className=" shadow-lg p-2 shadow-black ml-3 text-center rounded-2xl flex flex-wrap">
  {
    allData.map((item,index)=>(
  <ol key={item.id} className="p-5 text-l m-2 bg-blue-300 shadow-lg shadow-blue-500 rounded-2xl">
   <li className="text-left">RollNo:{item.rollno}</li>
   <li  className="text-left">Name:{item.name}</li>
   <li  className="text-left">Email:{item.email}</li>
     <li  className="text-left bg-red-500 text-center"><button onClick={()=>handleDelete(item.id)}>Delete</button></li>
</ol>
    ))
  }
</div>

    </>
  )
}
export default My;