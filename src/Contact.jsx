import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExternalLinkWrapper from "./ExternalLinkWrapper";
import { FaLinkedin, FaTwitter, FaDiscord, FaArrowLeft } from 'react-icons/fa';
import Background from "./Background";

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
            <div className="page-card">
                
                <div className="back-arrow">
                    <Link to="/">
                        <FaArrowLeft />
                    </Link>
                </div>

                <h1>contact me!</h1>
                
                <div>
                    <p style={{ paddingBottom: "1rem" }}>want to have a chat? it doesn't have to be about work!</p>
                    <p>i love talking to new people; if you fancy talking about a mutual interest or want to work on something, feel free to contact me ↓</p>
                </div>
                
                <div className="list">
                <ul>
                    <li>
                        <FaLinkedin className="list-icon" />
                        <p>linkedin:</p>
                        <ExternalLinkWrapper href="https://www.linkedin.com/in/ewan-lewis-492aa9283/" target="_blank" rel="noopener noreferrer">
                        Ewan Lewis</ExternalLinkWrapper>
                    </li>
                    <li>
                        <FaTwitter className="list-icon" />
                        <p>twitter:</p>
                        <ExternalLinkWrapper href="https://twitter.com/ewanleww" target="_blank" rel="noopener noreferrer">@ewanleww</ExternalLinkWrapper>
                        </li>
                    <li>
                        <FaDiscord className="list-icon" />
                        <p>discord:</p>
                        <ExternalLinkWrapper href="https://discordapp.com/users/113345742457864192" target="_blank" rel="noopener noreferrer">@ort</ExternalLinkWrapper>
                    </li>
                </ul>
                </div>

                <p>
                    if you fancy sending just a regular email, send it to{" "}
                    <ExternalLinkWrapper href="mailto:ewan.leww@gmail.com">ewan.leww@gmail.com</ExternalLinkWrapper>
                </p>

                <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9rem" }}>
                    keep in mind, it's currently {currentTime} in my local timezone - please forgive me if i don't get to your message immediately!
                </p>
            </div>
        </div>
    );
}

export default Contact;
