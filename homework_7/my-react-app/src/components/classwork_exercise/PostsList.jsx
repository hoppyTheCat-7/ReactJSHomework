import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostsList() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log("Error fetching data:", err));
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    // Styles
    const listContainerStyle = {
        listStyle: "none",
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px"
    };

    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
        width: "60%"
    };

    const linkStyle = {
        textDecoration: "none",
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#323232"
    };

    return (
        <main>
            <h1>A List of Most Recent Posts</h1>
            {posts.length > 0 && (
                <ul style={listContainerStyle}>
                    {posts.map(post => {
                        return (
                            <li key={post.id} style={cardStyle}>
                                <Link
                                    to={`/post/${post.id}`}
                                    style={linkStyle}
                                    onMouseEnter={(e) => e.target.style.color = "#9d4edd"}
                                    onMouseLeave={(e) => e.target.style.color = "#323232"}
                                >
                                    {post.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </main>
    );
}

export default PostsList