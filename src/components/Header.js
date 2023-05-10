import React, { useState } from 'react';


const Header = ({ title }) => {
  return (
    <header className='bg-gradient-to-r from-indigo-600 to-purple-500 text-gray-200'>
        <div className='container mx-0 flex items-center justify-between p-6'>
             <h1 className='font-bold text-3xl text-white'>{title}</h1>
             <div className='rounded-full bg-purple-600 h-16 w-16 flex items-center justify-center'>
                 <span className='text-white text-2xl font-bold'>JAV</span>
             </div>
        </div>
    </header>
  )
}

export default Header;
