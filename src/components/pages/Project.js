import React, { useState } from 'react';
import PenguinPost from "../../img/what-is-a-group-of-penguins-called.webp";
import PenguinType from "../../img/1_uEhUztwkzo29EYq4uZClsA.jpg";
import Scheduling from "../../img/Switch-to-Employee-Scheduling-Software.jpg";
import LogoAlchemy from "../../img/2618886898_preview_Alchemy-Machine-Map.jpg";

function Project() {
  const [projects, setProject] = useState([
    {
      id: 1,
      name: "The Penguin Post",
      github: "https://github.com/JesusV545/The-Penguin-Post",
      image: PenguinPost
    },
    {
      id: 2,
      name: "Penguin CAN Type",
      github: "https://github.com/JesusV545/Penguins-CAN-type",
      image: PenguinType
    },
    {
      id: 3,
      name: "Personal-Scheduling-Friend",
      github: "https://github.com/JesusV545/Personal-Scheduling-Friend",
      image: Scheduling
    },
    {
      id: 4,
      name: "Logo Alchemy",
      github: "https://github.com/JesusV545/Logo-Alchemy",
      image: LogoAlchemy
    }
  ]);

  return (
<div>
  <h2 className="text-2xl font-bold mb-4">Projects</h2>
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {projects.map((project) => (
      <li key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p>
            GitHub Repo:{" "}
            <a href={project.github} className="text-blue-500 hover:underline">
              {project.github}
            </a>
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export default Project;
