import React from 'react';

function Footer(props) {
  return (
    <footer class="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-8 mt-auto">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm">&copy; 2023 Jesus A. Vazquez. All rights reserved.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/JesusV545" target="_blank" rel="noopener noreferrer" title="Visit my Github profile">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" class="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/jesus-vazquez-470065262/" target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn profile">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="h-6 w-6 hover:opacity-75" />
          </a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
