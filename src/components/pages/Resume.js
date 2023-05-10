import React, { useState } from 'react';


function Resume(props) {
    return (
        <body class="bg-blue-100">
        <main class="container mx-auto py-6 px-4">
            <section class="mb-8">
            <h2 class="text-2xl font-bold mb-2 text-cyan-700">Skills</h2>
            <ul class="list-disc pl-6">
                <li class="text-lg text-cyan-900">JavaScript</li>
                <li class="text-lg text-cyan-900">React</li>
                <li class="text-lg text-cyan-900">Node.js</li>
                <li class="text-lg text-cyan-900">HTML/CSS</li>
                <li class="text-lg text-cyan-900">Tailwind CSS</li>
                <li class="text-lg text-cyan-900">Git</li>
                <li class="text-lg text-cyan-900">Agile Methodologies</li>
            </ul>
            </section>

            <section class="mb-8">
            <h2 class="text-2xl font-bold mb-2 text-cyan-700">Technologies</h2>
            <ul class="list-disc pl-6">
                <li class="text-lg text-cyan-900">JavaScript ES6+</li>
                <li class="text-lg text-cyan-900">React Router</li>
                <li class="text-lg text-cyan-900">Express.js</li>
                <li class="text-lg text-cyan-900">MongoDB</li>
                <li class="text-lg text-cyan-900">MySql</li>
                <li class="text-lg text-cyan-900">HandleBars</li>
                <li class="text-lg text-cyan-900">MERN</li>


            </ul>
            </section>

            <section class="mb-8">
            <h2 class="text-2xl font-bold mb-2 text-cyan-700">Education</h2>
            <ul class="list-disc pl-6">
                <li class="text-lg text-cyan-900">Laredo College</li>
                <li class="text-lg text-cyan-900">Texas A&amp;M International University</li>
                <li class="text-lg text-cyan-900">UT Austin</li>
            </ul>
            </section>
        </main>
        </body>

    )
};

export default Resume;