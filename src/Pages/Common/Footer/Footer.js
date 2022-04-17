import React from 'react';

const Footer = () => {
    const todayDate = new Date();
    const thisYear = todayDate.getFullYear()
    
    return (
        <div className='mx-auto bg-primary text-center p-3 text-white'>
             <p> Copyrights &copy; {thisYear}</p> 
        </div>
    );
};

export default Footer;