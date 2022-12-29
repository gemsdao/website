import { Switch } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { darkModeIcon, GemsDAOLogo } from './assets'

const Navbar = () => {

    const [enabled, setEnabled] = useState(false)

    return (
        <div className='flex items-center justify-between backdrop-blur-lg bg-[#4A6400] py-5 px-14'>
            <Image src={GemsDAOLogo} className={"md:w-[7vw] w-[6rem]"} alt="logo" />

            <div className='flex space-x-4 bg-[#617C12] rounded-full text-xl py-2 px-4 text-white'>
                <Link href={'/'}>Home</Link>
                <div className='border'></div>
                <Link href={'/opportunities'}>Opportunities</Link>
                <div className='border'></div>
                <Link href={'/aboutus'}> About Us</Link>
                <div className='border'></div>
                <Link href={'/profile'}>Your Profile</Link>
            </div>

            {/* <button>
                Dark mode
            </button> */}

            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-green-900' : 'bg-[#617C12]'
                    } relative inline-flex h-8 w-16 items-center rounded-full`}
            >
                <span
                    className={`${enabled ? 'translate-x-9' : 'translate-x-1'
                        } inline-block h-6 w-6 transform rounded-full bg-[white] transition`}
                >
                <Image src={darkModeIcon} className={"md:w-[7vw] w-[6rem]"} alt="" />
                </span>
            </Switch>

        </div>
    )
}

export default Navbar