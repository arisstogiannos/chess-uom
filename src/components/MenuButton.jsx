import React from 'react'

function MenuButton({setMenuOpen,menuOpen}) {
  return  <div className=' block  lg:hidden z-[1000]' >
    <input onChange={()=>(setMenuOpen((prev)=>(!prev)))} id="checkbox" checked={menuOpen} type="checkbox"/>
    <label  className="toggle" htmlFor="checkbox">
        <div className={`bars  transition-colors duration-300 delay-300 ${menuOpen?'bg-myBlack':'bg-myOrange'}`} id="bar1" ></div>
        <div className={`bars  transition-colors duration-300 delay-300 ${menuOpen?'bg-myBlack':'bg-myOrange'}`} id="bar2" ></div>
        <div className={`bars  transition-colors duration-300 delay-300 ${menuOpen?'bg-myBlack':'bg-myOrange'}`} id="bar3" ></div>
    </label>
    </div>
  
}

export default MenuButton