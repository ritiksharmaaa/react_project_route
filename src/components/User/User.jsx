import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {userid} = useParams()
    return(
        <div className='text-center bg-red-100    text-3xl p-4 font-serif'>User :{userid} </div>
    )
}
export default User ;