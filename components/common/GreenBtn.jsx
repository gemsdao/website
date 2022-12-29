import Link from 'next/link'
import React from 'react'

const GreenBtn = ({ btnlabel, link }) => {
    return (
        <Link href={link}>
            <button className='flex text-white px-4 py-3 rounded-md border-[3px] border-black text-base bg-[#4A6400]'>{btnlabel}</button>
        </Link>

    )
}

export default GreenBtn