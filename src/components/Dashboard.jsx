import Image from 'next/image'
import React from 'react'
import leftBrackt from '@/assets/leftBracket.svg'
import rightBrackt from '@/assets/rightBracket.svg'
import circleImage from '@/assets/circleImage.png'
const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="bracket-container relative  ">

<Image src={leftBrackt} alt='hello' className='' />
            <div className='px-[30px]' >
<div className='hi-rowan flex justify-center items-start' >

<p className='text-white hemming font-black text-[30px]' >
    Hi Rowan,<br /> Welcome back
</p>

<Image src={circleImage} alt='hello' className='relative top-[-4vw]'  />

<div className="flex flex-col gap-y-[2vw] ">
    <div className='flex justify-center items-center gap-x-[2vw]' >
        <p className=' text-white multicolor_text fira-semiboldn ' >
            10000+ 
        </p>

        <p className='text-white fira-semibold'>
            People sharing and renting <br /> and the resources around the world
        </p>
    </div>

    <div className="button-container  flex gap-x-[1vw] ">
        <button className='bg-white rounded-[5px] text-black inter-semibold px-5 py-1 ' >
            Share Resources
            </button>
            
            <button className='bg-white rounded-[5px] text-black inter-semibold px-5 py-1 ' >
Rent Resources

            </button>
    </div>
</div>
</div>

<Image src={rightBrackt} alt='hello' className='absolute top-0 right-0' />
</div>




        </div>


        {/* <div className="folder">
           <button className='bg-gradient-to-r from-[#d9d9d9] from-1%  to-[#737373] to-100%' >
            CPU <span className='text-white inter-semibold' >
                48%
            </span>
           </button>
            <div className="flex"></div>
            <div className="flex"></div>
        </div> */}
    </div>
  )
}

export default Dashboard