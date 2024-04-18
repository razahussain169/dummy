"use client"

import React, { useState } from 'react'
import '../styles/navbar.css'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import barChart from '../assets/BarChart.svg'
import compass from '@/assets/compass.svg'
import decstorage from '@/assets/decstorage.svg'
import aiDev from '@/assets/aidevtools.svg'
import marketHub from '@/assets/markethub.svg'
import tensornet from '@/assets/tensornet.svg'
import Dashboard from './Dashboard'

function Navbar() {

const [isActive, setisActive] = useState(0)
const handleItemClick = (index) => {
  setisActive(index);
};
  return (
    <>
  <nav>
<div className="nav-container m-3 ">
    <div className="wrapper flex justify-between items-center p-[20px] border border-[#d9d9d954] border-solid rounded-[20px] ">

    <Image src={Logo} className='w-[10vw] h-fit' alt='hello' />
    <button className='bg-white rounded-[5px] text-black inter-semibold p-3 ' >
        Get Started
    </button>
    </div>
</div>
  </nav>
  <div className="m-3 flex gap-x-[1vw] ">
  <section className="sidebar-menu h-[80vh] w-[14vw] border-solid border-[#D9D9D9] px-3 border rounded-[11px]  ">
<div 


className={`menu-container flex  items-center mt-[10px] p-[15px] gap-[0.8vw] rounded-[11px] ${isActive === 0 ? 'bg-gradient' : 'border border-[#fbfbfb26] border-solid'} `}   

onClick={() => handleItemClick(0)}

>
<Image src={barChart} alt='hello' />
<p className='text-white inter-semibold ' >Dashboard</p>
</div>
{/* tensor net */}
<div className={`menu-container flex  items-center p-[15px] gap-[0.8vw]  rounded-[11px] ${isActive === 1 ? 'bg-gradient' : 'border border-[#fbfbfb26] border-solid'}`}
onClick={() => handleItemClick(1)}

>
<Image src={tensornet} alt='hello' />
<p className='text-white inter-semibold ' >TensorNet</p>
</div>

{/* ai trainer */}
<div className={`menu-container flex  items-center p-[15px] gap-[0.8vw]  rounded-[11px] ${isActive === 2 ? 'bg-gradient' : 'border border-[#fbfbfb26] border-solid'}`}
onClick={() => handleItemClick(2)}>
<Image src={compass} alt='hello' />
<p className='text-white inter-semibold ' >AITrainer</p>
</div>

{/* dec storage */}

<div className={`menu-container flex  items-center p-[15px] gap-[0.8vw]  rounded-[11px] ${isActive === 3 ? 'bg-gradient' : 'border border-[#fbfbfb26] border-solid'}`}
onClick={() => handleItemClick(3)}
>
<Image src={decstorage} alt='hello' />
<p className='text-white inter-semibold ' >DecStorage</p>
</div>

{/* ai dev */}

<div className={`menu-container flex  items-center p-[15px] gap-[0.8vw]  rounded-[11px] ${isActive === 4 ? 'bg-gradient' : 'border border-[#fbfbfb26] border-solid'}`}
onClick={() => handleItemClick(4)}
>
<Image src={aiDev} alt='hello' />
<p className='text-white inter-semibold ' >AiDevTools</p>
</div>

{/* market */}

<div className={`menu-container flex  items-center p-[15px] gap-[0.8vw]  rounded-[11px] ${isActive === 5 ? 'bg-gradient' : 'border border-[#fbfbfb26] border-solid'}`}
onClick={() => handleItemClick(5)}

>
<Image src={marketHub} alt='hello' />
<p className='text-white inter-semibold ' >MarketHub</p>
</div>
</section>


<Dashboard/>
  </div>

 
    </>
  )
}

export default Navbar