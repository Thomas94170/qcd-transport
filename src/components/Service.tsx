import React from 'react';
import BounceA from './Bounce';
import FadeC from './FadeC';
import FadeD from './FadeD';
import FadeE from './FadeE';
import FadeF from './FadeF';
import FadeG from './FadeG';
import RotateImg from './Rotate';

export default function Service(){

    return(
        <>
        <div className="w-full sm:w-full max-w-full service-bg mt-10 border border-gray shadow-lg shadow-gray-500/50">
            
            <div className="grid grid-cols-2 gap-4">
                <div className="h-200 flex items-center justify-center titreServ">
                   <BounceA/>
                </div>
                <RotateImg/>
            </div>
            <div className='text-center m-10'>
                <FadeC/>
                <FadeD/>
                <FadeE/>
                <FadeF/>
                <FadeG/>
            </div>
        </div>
        
        </>
    )
}