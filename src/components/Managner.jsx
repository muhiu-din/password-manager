import React, { useRef, useState,useEffect } from 'react'
import { toast, ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Managner = () => {
  const [passType, setpassType] = useState("password")
  const [eyeIcon, seteyeIcon] = useState("./eyecross.png")
  const [data, setdata] = useState([])
  const [url,seturl] = useState('')
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [editId,seteditId] = useState(null)

  const ref = useRef()
  const showPassword = () => {

    if (passType === "password") {
      setpassType("text")
      seteyeIcon("./eye.png")
    }
    else {
      setpassType("password")
      seteyeIcon("./eyecross.png")
    }
  }
  const copyText = (text) => {
   toast('Copied to ClipBoard!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
});
    navigator.clipboard.writeText(text)

  }
  const fetchData = async () =>{
    try{
       let  res = await fetch('http://localhost:3000/api/')
      let mypass = await res.json()
       setdata(mypass)
    }catch(error){
      alert(error.message)
    }
  }
  useEffect(() => {
fetchData()
  }, [])
  
  const handleSave = async () => {
    let data = {url,username,password}
    let res;
 if(url && username && password){
    try{
     if(editId){
      console.log("Edit running")
      data._id = editId
        res = await fetch(`http://localhost:3000/api/${editId}`,{method:"PUT",headers: {
    "Content-Type": "application/json"
  },body:JSON.stringify(data)})
     }
     else{
        res = await fetch('http://localhost:3000/api',{method:"POST",headers: {
    "Content-Type": "application/json"
  },body:JSON.stringify(data)})
}
  let result = await res.json();
  if(res.ok){
    toast(`${result.message}`, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
});
    seturl('')
    setusername('')
    setpassword('')
    seteditId(null)
  }
  else{
    alert(result.message)
  }
  fetchData()
  }catch(error){
    alert(error.message)
  }
 }
 else{
   toast('Passwords cannot be empty!!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
});
 }

  }
  const handleEdit = async (id) => {
    let toEdit = data.find(item => item._id === id)
    seturl(toEdit.url)
    setusername(toEdit.username)
    setpassword(toEdit.password)
    seteditId(id)

  }
  const handleDelete = async (id) => {
    let confirmed = window.confirm("Are you sure want to delete this password?")
    if(confirmed){
      try{
       let  res = await fetch(`http://localhost:3000/api/${id}`,{method:"DELETE"})
     let result = await res.json();
     if(res.ok){
       toast(`${result.message}`, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
});
     }
     else{
       alert(result.message)
     }
     fetchData()
    }catch(error){
     alert(error.message)
    }
    }
    else{
      return
    }
    

  }
  return (

    <div>
    <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition={Bounce}
/>
      
      <div className=" mycontainer flex flex-col items-center ">
        <div className="heading flex flex-col justify-center items-center">
          <div className="logo font-bold text-4xl">
            <span className="text-green-600">&lt;</span>
            Lock
            <span className="text-green-600">ly/&gt;</span>
          </div>

          <p className='text-green-900 font-semibold text-s'>Your own password manager</p>
        </div>
        <div className='Inputs flex flex-col items-center gap-3 p-8'>

          <input onChange={(e) => seturl(e.target.value)} placeholder='Enter Website URL' className='border w-full border-green-700 px-4 py-1 rounded-lg' value={url} type="text" />
          <div className="second w-full flex gap-2 flex-col md:flex-row ">
            <div>
              <input onChange={(e) => setusername(e.target.value)} value={username} placeholder='Enter Username' className=' border w-full border-green-700 px-4 py-1 rounded-lg' type="text" />
              </div>
            <div className="flex w-[57vw] md:w-auto flex-row items-center  rounded-lg  border border-green-700 p-1 bg-white">
              <input onChange={(e) => setpassword(e.target.value)} value={password} placeholder='Enter Password' className='px-2' type={passType} />
              <img onClick={showPassword} className='h-6 cursor-pointer' src={eyeIcon} alt="" />
            </div>
          </div>

          <button onClick={() => handleSave()} className='bg-green-500 flex flex-row gap-1 items-center border border-green-900 hover:bg-green-400 rounded-full font-semibold w-fit px-1 py-1/2' >
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
            >
            </lord-icon>  Save
          </button>
        </div>
        <div className="passwords md:w-full flex flex-col items-center justify-center">
          <div className=' md:w-full  mx-auto'>
            <h1 className='font-bold  text-left'>Your Passwords</h1>
          </div>
          {data.length === 0 && "No passwords to show"}
          {data.length !== 0 &&
            <table className="table-auto border hover:border-2 mb-12 border-green-950 hover:shadow-lg rounded-lg overflow-hidden">
              <thead className='bg-green-600 '>
                <tr >
                  <th className='py-2 px-2'>Site</th>
                  <th className='py-2 px-2'>Username</th>
                  <th className='py-2 px-2'>Password</th>
                  <th className='py-2 px-2'>Action</th>
                </tr>
              </thead>
              <tbody className='bg-green-100'>
                {data.map((item, index) => {
                  return <tr key={index} className='border '>
                    <td className='py-2 w-[22vw]   text-center px-2'><div className='flex  flex-row items-center justify-center'>
                      <span>
                        <a href={item.url} target='_blank'>{item.url}</a>
                      </span>
                      <span onClick={() => copyText(item.url)} >
                        <lord-icon
                          src="https://cdn.lordicon.com/cfkiwvcc.json"
                          trigger="hover"
                          style={{ "width": "20px", "paddingTop": "5px", "paddingLeft": "3px" }}
                        >
                        </lord-icon>
                      </span></div></td>
                    <td className='py-2 w-[22vw] text-center px-2'><div className='flex  flex-row items-center justify-center'>
                      <span>
                        {item.username}
                      </span>
                      <span onClick={() => copyText(item.username)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/cfkiwvcc.json"
                          trigger="hover"
                          style={{ "width": "20px", "paddingTop": "5px", "paddingLeft": "3px" }}
                        >
                        </lord-icon>
                      </span></div></td>
                    <td className='py-2 w-[22vw] text-center px-2'><div className='flex  flex-row items-center justify-center'>
                      <span>
                        {"*".repeat(item.password.length)}
                      </span>
                      <span onClick={() => copyText(item.password)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/cfkiwvcc.json"
                          trigger="hover"
                          style={{ "width": "20px", "paddingTop": "2px", "paddingLeft": "3px" }}
                        >
                        </lord-icon>
                      </span></div></td>
                    <td className='py-2 w-[22vw] text-center px-2'><div className='flex  flex-row items-center justify-center'>
                      <span onClick={() => handleEdit(item._id)}>
                         <lord-icon
                           src="https://cdn.lordicon.com/valwmkhs.json"
                          trigger="hover"
                          style={{ "width": "20px", "paddingTop": "5px", "paddingLeft": "3px" }}
                        >
                        </lord-icon>
                      </span>
                      <span onClick={() => handleDelete(item._id)}>
                        <lord-icon
                           src="https://cdn.lordicon.com/oqeixref.json"
                          trigger="hover"
                          style={{ "width": "20px", "paddingTop": "5px", "paddingLeft": "3px" }}
                        >
                        </lord-icon>
                      </span></div></td>
                  </tr>

                })}


              </tbody>
            </table>



          }
        </div>
      </div>
    </div>
  )
}

export default Managner
