'use client'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'

function Loading({setLoading}) {
    useEffect(()=>{
       setTimeout(()=>(setLoading(false)),1000)

    },[])
  return (
    <div className='bg-mwhite w-screen h-screen overflow-hidden'>
        <motion.div initial={{scale:1}} animate={{scale:19, transition:{duration:1,delay:0.3, ease:'backIn'}}} className='w-40 h-40 bg-myOrange rounded-full mx-auto my-96'></motion.div>

    </div>
  )
}

export default Loading