'use client';
import './projects.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
    const projects = [
        {
            name: "Rent A Ride",
            description: "Rent a Ride, your premier car booking platform, extends its services to the top 10 cities across India.",
            stack: ["React", "Javascript", "HTML", "CSS."],
            repo: "https://github.com/aavishkark/CarRental",
            live: "https://car-rental-tawny-three.vercel.app/",
            image: "https://i.imgur.com/geEWapp.png",
        },
        {
            name: "Click It",
            description: "Clickit is a Ecommerce website for Shopping Clothes. This website contains details for Clothing products.",
            stack: ["React", "Redux", "Javascript", "HTML", "CSS."],
            repo: "https://github.com/aavishkark/ClickIt",
            live: "https://dainty-snake-6499.vercel.app/",
            image: "https://i.imgur.com/bSHshsX.png",
        },
        {
            name: "Hotel Odyssey",
            description: "Odyssey is a Hotel booking web application. User-friendly and feature-rich web application designed to assist tourists.",
            stack: ["Javascript", "HTML", "CSS."],
            repo: "https://github.com/aavishkark/HotelOdeyssey",
            live: "https://moonlit-unicorn-475c35.netlify.app/",
            image: "https://i.imgur.com/TWzir2o.png",
        }
    ];

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { tension: 200, friction: 20 },
    });


    return (
        <animated.div id='projects' className="projects-container" ref={ref} style={animation}>
            <div className="projects-header">My Projects</div>
            <div className="projects-content">
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <AnimatedProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </animated.div>
    );
}

type Project = {
    name: string;
    description: string;
    stack: string[];
    repo: string;
    live: string;
    image: string;
};

function AnimatedProjectCard({ project }: { project: Project }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { tension: 200, friction: 20 },
    });

    return (
        <animated.div className="project" ref={ref} style={animation}>
            <div className="project-image">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.stack.join(", ")}</p>
            </div>
            <div className='project-links'>
                <button>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">Github</a>
                </button>
                <button>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                </button>
            </div>
        </animated.div>
    );
}