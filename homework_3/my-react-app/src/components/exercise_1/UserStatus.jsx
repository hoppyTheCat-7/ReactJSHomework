import AdminPanel from './AdminPanel';

function UserStatus({ isAdmin, setIsLoggedIn, setIsAdmin }) {
    return (
        <div>
            <h2>Welcome, {isAdmin ? "Admin" : "User"}!</h2>
            {isAdmin && <AdminPanel />}
            <button className="log-btn" onClick={() => {
                setIsLoggedIn(false)
                setIsAdmin(false)
            }}>Log out</button>
        </div>
    )
}

export default UserStatus