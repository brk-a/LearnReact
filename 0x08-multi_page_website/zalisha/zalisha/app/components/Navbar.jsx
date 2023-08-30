"use client"
import { useState } from 'react'
import { close, logo, menu, zalishaGold} from '../assets'
import { navLinks } from '../constants'
import Image from 'next/image'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href={`#home`}>
        <Image src={zalishaGold} alt="logo" width={144} height={144} className=' py-2' />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`} key={nav.id}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image src={toggle ? close : menu} alt="menu" width={28} height={28} className='object-fit:contain' onClick={handleClick}/>
        <div className={`${toggle} ? 'flex' : 'hidden' p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`} key={nav.id}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar