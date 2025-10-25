import { useEffect, useState } from "react"

function RandomUserFetcher() {
    const [userInfo, setUserInfo] = useState(null);

    const fetchRandomUser = () => {
        const randomId = Math.floor(Math.random() * 10) + 1;
        fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
            .then((response) => response.json())
            .then((data) => setUserInfo(data))
            .catch((err) => console.log("Error fetching user:", err));
    };

    useEffect(() => {
        fetchRandomUser()
    }, [])

    return (
        <div className="user-container">
            <h1>Random User Fetcher</h1>
            {userInfo ? (
                <>
                    <h2>Info on the User with ID #{userInfo.id}</h2>
                    <div className="user-card">
                        <p><strong>Name:</strong> {userInfo.name}</p>
                        <p><strong>City:</strong> {userInfo.address.city}</p>
                        <p><strong>Phone Number:</strong> {userInfo.phone}</p>
                        <p><strong>Company Name:</strong> {userInfo.company.name}</p>
                    </div>
                </>
            ) : (
                <p>User not found!</p>
            )}
            <button className="user-btn" onClick={fetchRandomUser}>Get Random User</button>
        </div>
    )
}

export default RandomUserFetcher