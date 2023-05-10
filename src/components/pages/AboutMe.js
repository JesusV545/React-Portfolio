import React from 'react';

function AboutMe(props) {
  return (
<div className="bg-blue-100 p-8">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-blue-900">About Me</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Personal Statement</h2>
        <p className="text-lg leading-relaxed">
          My name is Jesus Alexandro Vazquez, and I am an aspiring full-stack web developer. I am passionate about coding and enjoy building and integrating computer systems in my free time.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Interests</h2>
        <ul className="list-disc pl-6">
          <li>Coding</li>
          <li>PC Building</li>
          <li>System Integration</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Hobbies</h2>
        <ul className="list-disc pl-6">
          <li>Reading</li>
          <li>Shooting</li>
          <li>Bowling</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Travel</h2>
        <ul className="list-disc pl-6">
          <li>The Baltics</li>
          <li>Mexico</li>
          <li>Italy</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

export default AboutMe;
