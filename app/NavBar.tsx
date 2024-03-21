'use client'
import React from 'react'
import Link from "next/link";
import { useSession } from 'next-auth/react';
import Loading from './loading';

export const NavBar = () => {
    const { status, data: session } = useSession();


    return (
        <div className='flex bg-slate-300 p-5 space-x-3'>
            <Link href='/' className='mr-5'>Next.js Project</Link>
            <Link href='/users'>Users</Link>
            {status === 'loading' && <Loading />}
            {status === 'authenticated' && <div>{session.user!.name}
                <Link className='ml-5' href='/api/auth/signout'>Sign Out</Link>
            </div>}
            {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
        </div>
    )
}
