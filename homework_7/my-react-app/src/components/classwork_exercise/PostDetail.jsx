import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetail() {
    const [singlePost, setSinglePost] = useState({});
    const { id } = useParams();

    const fetchSinglePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setSinglePost(data))
            .catch((err) => console.log("Error fetching the post with id ${id}:", err));
    };

    useEffect(() => {
        fetchSinglePost(id);
    }, [id])

    //Styles
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "50%",
        padding: "20px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        color: "#323232",
        // textAlign: "left",
        display: "flex",
        flexDirection: "column"
    };

    const backLinkStyle = {
        textDecoration: "none",
        backgroundColor: "#9d4edd",
        color: "#fff",
        display: "inline-block",
        width: "80px",
        textAlign: "center",
        fontWeight: "bold",
        padding: "8px 10px",
        marginBottom: "15px",
        marginLeft: "auto",
        borderRadius: "5px"
    };

    return (
        <div style={cardStyle}>
            <Link
                to="/posts"
                style={backLinkStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#6f3b99ff"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#9d4edd"}
            >
                Back
            </Link>
            <h2>Post with ID #{id}</h2>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    );
}

export default PostDetail