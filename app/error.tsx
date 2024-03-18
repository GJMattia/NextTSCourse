'use client'

interface Props {
    error: Error;
    reset: () => void;
}

import React from 'react'

const ErrorPage = ({ error, reset }: Props) => {
    console.log('Error', error)
    return (<>
        <div>An unexpected error has occured.</div>
        <button className='btn' onClick={() => reset()}>try again</button>
    </>
    )
}

export default ErrorPage