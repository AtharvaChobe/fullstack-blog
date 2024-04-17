import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#1b1b1d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    )
}

export default Spinner