import React from 'react';
import Projects from '../data/project_list.json';

function Project(){
    const {projects} = Projects;

    return(
        <div class="projects" id="projects">
        <h1>Projects</h1>

        {
            projects.map((project) => {
                return (
                    <div class="projects-section">
                        <div class="project-img">
                            <img src={project.img_url} alt="lol" />
                        </div>
                        <div class="project-desc">
                            <h2>{project.title}</h2>
                            <a href={project.demo_url} target="_blank" rel='noreferrer'><button>Demo Link</button></a>
                            <a href={project.github_url} target="_blank" rel='noreferrer'><button>Github Link</button></a>
                            <p>{project.description}</p>
                            {
                                project.techStack.map((technology) => {
                                    return (
                                        <p className="stack">{technology}</p>
                                    );
                                })
                            }
                        </div>
                    </div>              
                );
            })
        }

        </div>
    );
}

export default Project;