import React from 'react'
import './Experience.css'
import AccordionContainer from '../AccordionContainer/AccordionContainer';

const Experience = () => {
    let projects=[
        {
            title:"I worked at Beacons",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            title:"I worked at Otis",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            title:"I worked at CTC",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            title:"I worked at Lavalab",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            title:"I worked at CAIS",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ];



    return (
        <div id="Projects">
            <h1>Projects & Experience</h1>

                {projects.map((project)=>(
                    <AccordionContainer 
                        title={project.title}
                        text={project.text}
                    />
                ))}

            
        </div>
    )
}

export default Experience
