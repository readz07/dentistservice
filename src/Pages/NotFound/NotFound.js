import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../images/error-page/404.jpg'
const NotFound = () => {
    const navigate = useNavigate();
    const navigateFromErrorPage = ()=>{
        navigate('/')
    }
    return (
        <div className='mx-auto bg-warning text-center p-5 text-white'>
            <h2>You Might Get Lost. <button onClick={navigateFromErrorPage} className="btn btn-primary"> Click Here</button></h2>
            <img src={notFound} alt='404 Page' className='w-100'/>
        </div>
    );
};

export default NotFound;