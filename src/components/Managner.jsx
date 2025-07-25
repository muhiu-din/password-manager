import React from 'react'

const Managner = () => {
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className=" mycontainer flex flex-col items-center ">
           <div className="heading flex flex-col justify-center items-center">
            <div className="logo font-bold text-4xl">
                  <span className="text-green-600">&lt;</span>
            Lock
            <span className="text-green-600">ly/&gt;</span>
            </div>

            <p className='text-green-900 font-semibold text-s'>Your own password manager</p>
           </div>
             <div className='Inputs flex flex-col items-center gap-2 p-8'>  
          
             <input className='border w-full border-green-700 px-4 py-1 rounded-lg' type="text" />
            <div className="second w-full flex gap-2 flex-row ">
                <input className=' border border-green-700 px-4 py-1 rounded-lg' type="text" />
                <input className=' border border-green-700 px-4 py-1 rounded-lg' type="text" />
            </div>
            <button className='bg-green-600 hover:bg-green-400 rounded-full font-semibold w-fit px-3 py-1' >
                Add Password
            </button>
            </div>
        </div>
        </div>
    )
}

export default Managner
