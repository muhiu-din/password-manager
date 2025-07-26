import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-14 px-4 fixed bottom-0 w-full bg-slate-800 text-white font-semibold flex flex-row items-center justify-between'>
        <div className='flex items-center justify-center'>
            <div className="img">
            <img className='w-12' src="./devnest_logo.png" alt="" />
            </div>
            <div className="text mb-1">
                | © 2025 Lockely
            </div>
        </div>
        <div className='text-xs font-thin flex flex-col justify-center'>
            <span>Privacy Policy</span>
            <span>More about us</span>
        </div>
    </div>
  )
}

export default Footer