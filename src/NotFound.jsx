import { useEffect } from "react";
import Background from "./Background";
import CustomCursor from "./CustomCursor";

function NotFound() {
    useEffect(() => {
        document.title = '404 | Ewan Lewis'
    }, []);

    return (
        <div className="page-container home">
            <Background />
            <CustomCursor />
            <div className="page-card">
                <h1>404 - Page Not Found</h1>
                <p>uh oh - page doesn't exist :(</p>
                <p><a href="/">Home</a></p>
            </div>
        </div>
    );
}

export default NotFound;