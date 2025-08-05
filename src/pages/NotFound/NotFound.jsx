import { useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../../components/Background";

function NotFound() {
    useEffect(() => {
        document.title = '404 | Ewan Lewis'
    }, []);

    return (
        <div className="page-container home">
            <Background />
            <div className="page-card">
                
                <h1>404 - page not found</h1>
                <p>the page you're looking for doesn't exist :(</p>
                <p>if you feel that this page should exist, please <Link to="/contact">contact me!</Link></p>

                <div className="nav-buttons">
                    <Link to="/" tabIndex={1} className="nav-button">go home!</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;