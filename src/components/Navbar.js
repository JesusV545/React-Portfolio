import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="flex justify-center text-2xl bg-gray-800 py-4 rounded-lg">
      <li className="mr-6">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'text-gray-400 font-bold' : 'text-gray-300 hover:text-gray-400'}
        >
          About Me
        </a>
      </li>
      <li className="mr-6">
        <a
          href="#Project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'text-gray-400 font-bold' : 'text-gray-300 hover:text-gray-400'}
        >
          Projects
        </a>
      </li>
      <li className="mr-6">
        <a
          href="#Contacts"
          onClick={() => handlePageChange('Contacts')}
          className={currentPage === 'Contacts' ? 'text-gray-400 font-bold' : 'text-gray-300 hover:text-gray-400'}
        >
          Contacts
        </a>
      </li>
      <li className="mr-6">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'text-gray-400 font-bold' : 'text-gray-300 hover:text-gray-400'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;

