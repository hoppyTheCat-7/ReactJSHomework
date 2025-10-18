function Login({ uponLogin }) {
    return (
        <div>
            <h2>Please, log in first!</h2>
            <div className="log-btn-holder">
                <button className="log-btn" onClick={() => uponLogin(false)}>Log in as a Regular User</button>
                <button className="log-btn" onClick={() => uponLogin(true)}>Log in as an Admin</button>
            </div>
        </div>
    )
}

export default Login