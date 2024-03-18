import React from 'react'
import Link from "next/link";

export const NavBar = () => {
    return (
        <div className='flex bg-slate-300 p-5'>
            <Link href='/' className='mr-5'>Next.js Project</Link>
            <Link href='/users'>Users</Link>
        </div>
    )
}
