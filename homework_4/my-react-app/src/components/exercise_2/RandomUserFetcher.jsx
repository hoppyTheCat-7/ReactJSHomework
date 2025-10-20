import { useEffect, useState } from "react"

function RandomUserFetcher() {
    const [userId, setUserId] = useState(1);
    const [userInfo, setUserInfo] = useState(null);

    const handleUserId = () => {
        setUserId(Math.floor(Math.random() * 10) + 1);
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setUserInfo(data))
    }, [userId])

    return (
        <div className="user-container">
            <h1>Random User Fetcher</h1>
            <h2>Info on the User with ID #{userId}</h2>
            {userInfo ? (
                <div className="user-card">
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>City:</strong> {userInfo.address.city}</p>
                    <p><strong>Phone Number:</strong> {userInfo.phone}</p>
                    <p><strong>Company Name:</strong> {userInfo.company.name}</p>
                </div>
            ) : (
                <p>User not found!</p>
            )}
            <button className="user-btn" onClick={handleUserId}>Get Random User</button>
        </div>
    )
}

export default RandomUserFetcher