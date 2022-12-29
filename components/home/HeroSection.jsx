import React from 'react'
import { GreenBtn } from '../common'

const HeroSection = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-[19vh] text-7xl' >
            <h1 className='flex font-bold text-7xl'>
                Getting a Web3 Job is <br /> now easier than, ever! 🚀
            </h1>

            <div className='flex pt-[7vh]'>
                <GreenBtn btnlabel={"Show me Opportunities"} link={'/'} />
            </div>


        </div>
    )
}

export default HeroSection