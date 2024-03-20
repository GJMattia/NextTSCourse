'use client'
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { set } from 'zod';

interface CloudinaryResult {
    public_id: string
};


const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt='sauce on my boss' />}
            <CldUploadWidget uploadPreset="tifokcvv"
                options={{
                    sources: ['local'],
                    multiple: false,
                    maxFiles: 5
                }}
                onSuccess={(result, widget) => {
                    console.log(result)
                    if (result.event !== 'success') return;
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id)
                }}>
                {({ open }) => {
                    return (
                        <button className='btn btn-primary' onClick={() => open()}>
                            Upload
                        </button>
                    );
                }}
            </CldUploadWidget >
        </>
    )
}

export default UploadPage