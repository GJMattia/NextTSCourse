import React from 'react'
import Link from "next/link";

export const NavBar = () => {
    return (
        <div className='flex bg-slate-300 p-5 space-x-3'>
            <Link href='/' className='mr-5'>Next.js Project</Link>
            <Link href='/users'>Users</Link>
            <Link href='/api/auth/signin'>Login</Link>
        </div>
    )
}
