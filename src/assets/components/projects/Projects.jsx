import React, { useEffect, useState } from 'react';
import './projects.css';
import projects from '../../../../src/assets/db/mockProjects.json';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [nextProject, setNextProject] = useState(projects[1]);
    const [prevProject, setPrevProject] = useState(null);
    const [displayProject, setDisplayProject] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    function toggleSelectProject(id) {
        const project = projects.find(p => p.id === id);
        setSelectedProject(project);
    }

    function toggleDisplayProject() {
        setDisplayProject(curr => !curr);
    }

    useEffect(() => {
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        const nextIndex = (currentIndex + 1) % projects.length;
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

        setNextProject(projects[nextIndex]);
        setPrevProject(projects[prevIndex]);
    }, [selectedProject]);

    return (
        <div className="projects-main">
            <div className={displayProject ? 'projects-single-item-full' :'projects-single-item'}>
                <div className="projects-single-item-preview">
                    <div className={displayProject ? 'change-projects' : 'change-projects-hide'}>
                        <div className="projects-change-item next-item" onClick={() => toggleSelectProject(nextProject.id)}>
                            <img className='projects-single-item-image' src={nextProject?.images[0]} alt={nextProject?.title} />
                            {showTitle && <p>{nextProject.title}</p>}
                        </div>
                        <div className="projects-change-item prev-item" onClick={() => toggleSelectProject(prevProject.id)}>
                            <img className='projects-single-item-image' src={prevProject?.images[0]} alt={prevProject?.title} />
                        </div>
                    </div>
                    <div className="single-item-image-div">
                        <img className='projects-single-item-image' src={selectedProject?.images[0]} alt={selectedProject?.title} />
                    </div>
                    {/* <ul className="single-item-small-image">
                        {selectedProject.images.map((image, index) => (
                            <img key={index} src={image} alt="" className='small-image' />
                        ))}
                    </ul> */}
                </div>
                {displayProject ? (
                    <div className="projects-single-item-info">
                        <div className="back-button" onClick={toggleDisplayProject}>
                            Back
                        </div>
                        <h4>More info about {selectedProject.title}</h4>
                        <p>This is some more info...</p>
                        <p>{selectedProject.description}</p>
                    </div>
                ) : (
                    <div className="projects-single-item-info">
                        <h4>{selectedProject.title}</h4>
                        <p>{selectedProject.description}</p>
                        <button onClick={toggleDisplayProject}>More info</button>
                    </div>
                )}
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
