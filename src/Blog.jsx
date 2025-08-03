import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Background from "./Background";
import ReactMarkdown from "react-markdown";
import "./BlogPost.css";

const POSTS_PER_PAGE = 5;

function Blog() {
const [searchParams] = useSearchParams();
const page = parseInt(searchParams.get("page")) || 1;
const [posts, setPosts] = useState([]);
const [postContents, setPostContents] = useState({});

useEffect(() => {
    document.title = `blog (page ${page}) | ewan lewis`;

    // fetch metadata
    fetch(`${import.meta.env.BASE_URL}posts/posts.json`)
    .then((res) => res.json())
    .then(async (data) => {

        // sort newest first
        const sorted = [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sorted);

        // determine which posts belong to this page
        const startIndex = (page - 1) * POSTS_PER_PAGE;
        const currentPosts = sorted.slice(startIndex, startIndex + POSTS_PER_PAGE);

        // fetch markdown content for each post
        const contents = {};
        for (const post of currentPosts) {
        const res = await fetch(`${import.meta.env.BASE_URL}posts/${post.slug}.md`);
        contents[post.slug] = await res.text();
        }
        setPostContents(contents);
    });
}, [page]);

const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

return (
    <div className="page-container">
        <Background />
        <div className="page-card blog-feed">
            
        <div className="back-arrow">
            <Link to="/">
                <FaArrowLeft />
            </Link>
        </div>
        <h1>personal/dev blog :)</h1>

        {posts
        .slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
        .map((post) => (
            <div key={post.slug} className="blog-post-full">

            <h2>{post.title}</h2>

            <hr className="blog-divider" />

            <div className="blog-post-content">
                <ReactMarkdown>{postContents[post.slug] || ""}</ReactMarkdown>
            </div>

            <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

            <p style={{ fontSize: "0.9rem", opacity: 0.7, textAlign: "right" }}>
                {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric"
                })}
            </p>

            </div>
        ))}

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
        {page > 1 && (
            <Link to={`/blog?page=${page - 1}`} className="nav-button">
            previous
            </Link>
        )}
        {page < totalPages && (
            <Link to={`/blog?page=${page + 1}`} className="nav-button">
            next
            </Link>
        )}
        </div>
    </div>
    </div>
);
}

export default Blog;
