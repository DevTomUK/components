import React, { useState } from 'react';
import './projects.css';
import projects from '../../../../src/assets/db/mockProjects.json';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [displayProject, setDisplayProject] = useState(false)

    function toggleSelectProject(id) {
        console.log(id);
        const project = projects.find(p => p.id === id);
        setSelectedProject(project);
    }

    function toggleDisplayProject() {
        setDisplayProject(curr => !curr)
    }

    return (
        <div className="projects-main">
            <div className={displayProject ? 'projects-single-item-full' :'projects-single-item' }>
                <div className="projects-single-item-preview">
                    <img className='projects-single-item-image' src={selectedProject.images[0]} alt={selectedProject.title} />
                    <ul className="single-item-small-image">
                    {selectedProject.images.map((image, index) => (
                        <img key={index} src={image} alt="" className='small-image'/>
                    ))}
                    </ul>


                </div>
                {displayProject ? 
                <div className="projects-single-item-info">
                    <h4>More info</h4>
                    <p>This is some more info...</p>
                    <button onClick={() => toggleDisplayProject()}>Back to project</button>
                </div>
                :
                <div className="projects-single-item-info">
                    <h4>{selectedProject.title}</h4>
                    <p>{selectedProject.description}</p>
                    <button onClick={() => toggleDisplayProject()}>More info</button>
                </div>}
            </div>
            <div className={displayProject ? 'projects-list-items-hidden' : 'projects-list-items'}>
                <ul>
                    {projects.map((project) => (
                        <li onClick={() => toggleSelectProject(project.id)} className='project-item' key={project.id}>
                            <div className="flex-row">
                                <img className='project-list-item-image' src={project.images[0]} alt={project.title} />
                                <div className="flex-col">
                                    <h4 className='project-list-item-title'>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
