import React,{useRef,useState} from 'react'

const Managner = () => {
    const [passType,setpassType] = useState("password")
    const [eyeIcon,seteyeIcon] = useState("./eyecross.png")
    const [data,setdata] = useState([{name:"sa"}])


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
                <div className="passwords w-full flex flex-col items-center justify-center">
                   <div className='w-full mx-auto'>
                     <h1 className='font-bold ml-4 text-left'>Your Passwords</h1>
                   </div>
                    {data.length === 0 && "No passwords to show"}
                    {data.length !== 0 && 
                    <table class="table-auto border border-green-900  rounded-full overflow-auto">
  <thead className='bg-green-600 '>
    <tr >
      <th className='py-2 px-2'>Song</th>
      <th className='py-2 px-2'>Artist</th>
      <th className='py-2 px-2'>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr  className='border'>
      <td className='py-2 px-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className='py-2 px-2'>Malcolm Lockyer</td>
      <td className='py-2 px-2'>1961</td>
    </tr>
    <tr className='border'>
      <td className='py-2 px-2'>Witchy Woman</td>
      <td className='py-2 px-2'>The Eagles</td>
      <td className='py-2 px-2'>1972</td>
    </tr>
    <tr className='border'>
      <td className='py-2 px-2'>Shining Star</td>
      <td className='py-2 px-2'>Earth, Wind, and Fire</td>
      <td className='py-2 px-2'>1975</td>
    </tr>
  </tbody>
</table>
                    
                    
                    
                    }
                </div>
            </div>
        </div>
    )
}

export default Managner
