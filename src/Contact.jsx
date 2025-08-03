import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';
import Background from "./Background";
import CustomCursor from "./CustomCursor";

function Contact() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        document.title = 'contact | ewan lewis';

        const updateTime = () => {
            const now = new Date();
            const options = { 
                timeZone: "Europe/London",
                hour: "numeric", 
                minute: "2-digit", 
                hour12: true 
            };
            setCurrentTime(now.toLocaleString("en-GB", options));
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="page-container home">
            <Background />
            <CustomCursor />
            <div className="page-card">
                <h1>contact me! please!</h1>
                
                <div>
                    <p style={{ paddingBottom: "1rem" }}>want to have a chat? it doesn't have to be about work! :D</p>
                    <p>i love talking to new people, so if you fancy talking about a mutual interest or want to see more of my work, feel free to contact me through any of the means below ↓</p>
                </div>
                
                <div className="list">
                <ul>
                    <li>
                        <FaLinkedin className="list-icon" />
                        <p>linkedin:</p>
                        <a href="https://www.linkedin.com/in/ewan-lewis-492aa9283/" target="_blank" rel="noopener noreferrer">
                        Ewan Lewis</a>
                    </li>
                    <li>
                        <FaTwitter className="list-icon" />
                        <p>twitter:</p>
                        <a href="https://twitter.com/ewanleww" target="_blank" rel="noopener noreferrer">@ewanleww</a>
                        </li>
                    <li>
                        <FaDiscord className="list-icon" />
                        <p>discord:</p>
                        <a href="https://discordapp.com/users/113345742457864192" target="_blank" rel="noopener noreferrer">@ort</a>
                    </li>
                </ul>
                </div>

                <p>
                    if you fancy sending just a regular email, send it to{" "}
                    <a href="mailto:ewan.leww@gmail.com">ewan.leww@gmail.com</a>
                </p>

                <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9rem" }}>
                    keep in mind, it's currently {currentTime} - forgive me if i don't get to your message immediately
                </p>

                <div className="nav-buttons" style={{ marginTop: "2rem" }}>
                    <Link to="/" className="nav-button">go home!</Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;
