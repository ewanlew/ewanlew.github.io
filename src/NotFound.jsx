import { useEffect } from "react";

function NotFound() {
    useEffect(() => {
        document.title = '404 | Ewan Lewis'
    }, []);

    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>uh oh - page doesn't exist :(</p>
            <p><a href="/">Home</a></p>
        </div>
    );
}

export default NotFound;