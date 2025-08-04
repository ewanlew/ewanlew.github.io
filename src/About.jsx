import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaDiscord, FaGithub, FaArrowLeft } from 'react-icons/fa';
import Background from "./Background";
import ExternalLinkWrapper from "./ExternalLinkWrapper";
import './About.css';

function About() {
    useEffect(() => {
        document.title = 'about | ewan lewis';
    }, []);

    return (
        <div className="page-container">            <Background />
            <div className="page-card about-card">

                <div className="back-arrow">
                    <Link to="/">
                        <FaArrowLeft />
                    </Link>
                </div>

                <h1>about me!</h1>

                <p class="body-text">
                    hi! i'm ewan, a software engineer from south wales. i currently live near swansea and
                    spend my free time looking at solutions for problems you didn't know you had. (and filling out
                    my living dex...)
                </p>
                
                <p class="body-text">
                    i’m a recent graduate from swansea university
                    where i found my passion for <span style={{ color: 'var(--main-accent)' }}>video game development</span>,
                    <span style={{ color: 'var(--main-accent)' }}> website development</span>, and 
                    <span style={{ color: 'var(--main-accent)' }}> mobile app development</span>! if you fancy seeing what projects
                    i got up to in my university days (including my undergraduate final project), have a look{" "}
                    <ExternalLinkWrapper href="/projects#university-projects">
                        here!
                    </ExternalLinkWrapper>
                </p>

                <hr style={{ margin: "1.5rem 0", opacity: 0.2 }} />

                <h2>current stack!</h2>

                <div className="skills-grid">
                    <div className="skills-box">
                        <h3>confident in</h3>
                        <div className="skill-badges">
                            <span>java</span>
                            <span>kotlin</span>
                            <span>html5</span>
                            <span>css3</span>
                            <span>mysql</span>
                            <span>python</span>
                        </div>
                    </div>

                    <div className="skills-box">
                        <h3>experienced in</h3>
                        <div className="skill-badges">
                            <span>laravel & php</span>
                            <span>javascript</span>
                            <span>aws rds & ses</span>
                            <span>unity2d</span>
                            <span>c#</span>
                        </div>
                    </div>

                    <div className="skills-box">
                        <h3>exploring</h3>
                        <div className="skill-badges">
                            <span>react</span>
                            <span>next.js</span>
                            <span>tailwind css</span>
                            <span>postgresql</span>
                        </div>
                    </div>

                    <div className="skills-box">
                        <h3>additional tools</h3>
                        <div className="skill-badges">
                            <span>git</span>
                            <span>docker</span>
                            <span>aws</span>
                        </div>
                    </div>
                </div>
                <p className="body-text" style={{ paddingTop: "2rem" }}>
                    wanna have a nose at how i use these skills, or what i'm using them for right now? have
                    a look {" "}
                    <ExternalLinkWrapper href="/projects#skills">here!</ExternalLinkWrapper>
                </p>


                <hr style={{ margin: "1.5rem 0", opacity: 0.2 }} />

                <h2 style={{marginBottom: "1.2rem" }}>outside of work!</h2>
                
                <p className="body-text">
                    video games have been a huge part of my life since i was a kid. they are what
                    shaped me as person and what made me want to pursue a career in any kind of
                    software development.
                </p>
                <p className="body-text">
                    the game series that shaped my love for gaming is the main line {" "}
                    <ExternalLinkWrapper href="https://www.serebii.net/pokemon/mainseries.shtml">
                        pokémon
                    </ExternalLinkWrapper> {" "}
                    games. when my dad gifted me a copy of pokémon diamond in christmas of 2008, no one would have made
                    me believe that it would be my entire personality for the following decade and a half. {""}
                    <span style={{ color: 'rgba(194, 166, 166, 1)' }}>(the icon for this site is a fletchinder)</span>
                </p>

                <p className="body-text">
                    i've also had a distinct fondness for traveling (both to new countries and cities in the uk).
                    when i visit family back in the usa, it always comes with seeings the breathtaking sights of
                    {" "}
                    <ExternalLinkWrapper href="https://www.artinnaturephotography.com/gallery/sierranevada/all/">
                        sierra nevada
                    </ExternalLinkWrapper>. in all, i've visited austria, france, germany, with plans to visit hong kong and
                    japan in late 2026.
                    
                </p>

                <hr style={{ margin: "1.5rem 0", opacity: 0.2 }} />

                <div className="socials-icons">
                    <a href="https://github.com/ewanlew" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ewan-lewis-492aa9283/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/ewanleww" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://discordapp.com/users/113345742457864192" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
