
const Navbar = () => {
    return (
        <nav className='bg-slate-800  text-white h-14 flex flex-row justify-between items-center py-4 px-10 '>
            <div className='font-bold text-2xl'>
                <span className="text-green-600">&lt;</span>
                Lock
                <span className="text-green-600">ly/&gt;</span>
            </div>
            <div >
                <ul className="flex flex-row justify-between gap-4">
                    <li className="w-auto invert hover:font-semibold">
                        <a href="#"><lord-icon
                            src="https://cdn.lordicon.com/upjgggre.json"
                            trigger="hover"
                        >
                        </lord-icon></a>
                    </li>
                    <li className="w-auto invert hover:font-semibold">
                        <a  href="#"><lord-icon
                            src="https://cdn.lordicon.com/yhtmwrae.json"
                            trigger="hover"
                        >
                        </lord-icon></a>
                    </li>
                    <li className="w-auto invert hover:font-semibold">
                        <a href="#"><lord-icon
                            src="https://cdn.lordicon.com/ircnfpus.json"
                            trigger="hover"
                        >
                        </lord-icon></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar