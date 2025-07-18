import { useEffect } from 'react';

function About() {
    useEffect(() => {
        document.title = 'Projects | Ewan Lewis'
    }, []);

    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

export default About;