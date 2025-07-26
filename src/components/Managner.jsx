import React,{useRef,useState} from 'react'

const Managner = () => {
    const [passType,setpassType] = useState("password")
    const [eyeIcon,seteyeIcon] = useState("./eyecross.png")
    const [data,setdata] = useState([{url:"sa",username:"md",password:"ni bataon ga"}])


    const ref = useRef()
    const showPassword = () =>{

        if(passType === "password"){
            setpassType("text")
            seteyeIcon("./eye.png")
        }
        else{
            setpassType("password")
            seteyeIcon("./eyecross.png")
        }
    }
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
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

                    <input placeholder='Enter Website URL' className='border w-full border-green-700 px-4 py-1 rounded-lg' type="text" />
                    <div className="second w-full flex gap-2 flex-col md:flex-row ">
                        <div><input placeholder='Enter Username' className=' border w-full border-green-700 px-4 py-1 rounded-lg' type="text" /></div>
                        <div className="flex w-[57vw] md:w-auto flex-row items-center  rounded-lg  border border-green-700 p-1 bg-white">
                            <input placeholder='Enter Password' className='px-2' type={passType} />
                            <img onClick={showPassword} className='h-6 cursor-pointer' src={eyeIcon} alt="" />
                        </div>
                    </div>
                 
                    <button className='bg-green-500 flex flex-row gap-1/2 items-center border border-green-900 hover:bg-green-400 rounded-full font-semibold w-fit px-1 py-1/2' >
                         <lord-icon
                        src="https://cdn.lordicon.com/gzqofmcx.json"
                        trigger="hover"
                        >
                    </lord-icon>  Add Password
                    </button>
                </div>
                <div className="passwords md:w-full flex flex-col items-center justify-center">
                   <div className=' md:w-full  mx-auto'>
                     <h1 className='font-bold  text-left'>Your Passwords</h1>
                   </div>
                    {data.length === 0 && "No passwords to show"}
                    {data.length !== 0 && 
                    <table class="table-auto border hover:border-2  border-green-950 hover:shadow-lg rounded-lg overflow-hidden">
  <thead className='bg-green-600 '>
    <tr >
      <th className='py-2 px-2'>Site</th>
      <th className='py-2 px-2'>Username</th>
      <th className='py-2 px-2'>Password</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
    {data.map((item,index) => {
      return  <tr key={index}  className='border '>
      <td className='py-2 w-[22vw] text-center px-2'><a href={item.url} target='_blank'>{item.url}</a></td>
      <td className='py-2 w-[22vw] text-center px-2'>{item.username}</td>
      <td className='py-2 w-[22vw] text-center px-2'>{item.password}</td>
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
