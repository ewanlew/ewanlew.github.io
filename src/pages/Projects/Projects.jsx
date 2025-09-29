import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Background from "../../components/Background";
import "./Projects.css";

// 🎨 centralised tag colour map
const tagColors = {
    Unity: "#222C37",
    "C#": "#68217A",
    Laravel: "#FF2D20",
    PHP: "#777BB4",
    MySQL: "#4479A1",
    Bootstrap: "#7952B3",
    Kotlin: "#7F52FF",
    Android: "#1b834aff",
    AWS: "#b16a00ff",
    Ktor: "#009688",
    React: "#207d97ff",
    Vite: "#646CFF",
    Docker: "#a764ffff",
    JS: "#776b13ff",
    CSS: "#2965F1",
    "GitHub Pages": "#181717",
    Java: "#b07219ff",
    JavaFX: "#b05019ff",
    API: "#181717"
};

// projects
const universityProjects = [
    {
        title: "Final Project",
        description: "Feature-full room booking Android app. User and admin functionality, in-app booking, schedule viewing, custom Kotlin backend. [2025]",
        skills: ["Kotlin", "Android", "AWS", "MySQL", "Ktor"],
        repo: "https://github.com/ewanlew/dissertation-complete-project",
        image: "/img/projects/room-booking.webp",
        highlight: true
    },
    {
        title: "Chicken Hunt",
        description: "Unity2D Duck Hunt clone. Has full leaderboard, live updates, power-ups, and remappable controls. [2025]",
        skills: ["Unity", "C#"],
        repo: "https://github.com/ewanlew/CW384-chicken-hunt",
        image: "/img/projects/chicken-hunt.webp"
    },
    {
        title: "Talk! Social",
        description: "Social media platform fit with posts, comments, notifications, and admin / user privilege levels. [2024]",
        skills: ["Laravel", "PHP", "MySQL", "Bootstrap", "Docker"],
        repo: "https://github.com/ewanlew/CW348-talk-web-app",
        image: "/img/projects/talk-web-app.webp",
    },
    {
        title: "Trivia Time!",
        description: "Android trivia app with questions being pulled from OpenTriviaDB. Customisable profile, password protection, and quiz creation & sharing. [2024]",
        skills: ["Kotlin", "Android", "API"],
        repo: "https://github.com/ewanlew/CW306-trivia-app",
        image: "/img/projects/trivia-time.webp",
    },
    {
        title: "Photoshop Lite",
        description: "Image manipulation software - gamma correction, image resizing (bilinear & nearest neighbour), and laplacian filter. [2023]",
        skills: ["Java", "JavaFX"],
        repo: "https://github.com/ewanlew/CW256-photoshop-lite",
        image: "/img/projects/photoshop-lite.gif",
    },
];

const personalProjects = [
    {
        title: "Portfolio Website",
        description: "First version of my portfolio website (you are here!). Has landing page, about, projects, blog, and contact pages.",
        skills: ["React", "Vite", "CSS", "JS", "GitHub Pages"],
        repo: "https://github.com/ewanlew/ewanlew.github.io",
        image: "/img/projects/portfolio-v1.webp",
    }
];

function Projects() {
    useEffect(() => {
        document.title = "projects | ewan lewis";
    }, []);

    const renderProjects = (projects) =>
        projects.map((project, index) => (
            <div
                key={index}
                className={`project-card ${project.highlight ? "highlight" : ""}`}
                onClick={() => window.open(project.repo, "_blank")}
            >
                <img src={project.image} alt={project.title} className="project-thumb" />
                <h3>{project.title}</h3>
                <p className="body-text">{project.description}</p>
                <div className="skill-badges">
                    {project.skills.map((skill, i) => (
                        <span key={i} style={{ backgroundColor: tagColors[skill] }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        ));

    return (
        <div className="page-container">
            <Background />
            <div className="page-card">
                <div className="back-arrow">
                    <Link to="/">
                        <FaArrowLeft />
                    </Link>
                </div>

                <h1>projects</h1>

                <h2 id="university-projects">university projects</h2>
                <div className="projects-grid">{renderProjects(universityProjects)}</div>

                <hr style={{ margin: "1.5rem 0", opacity: 0.2 }} />

                <h2 id="personal-projects">personal projects</h2>
                <div className="projects-grid">{renderProjects(personalProjects)}</div>
            </div>
        </div>
    );
}

export default Projects;

