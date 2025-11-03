function SubmittedData({ data }) {
    return (
        <>
            {Object.keys(data).length > 0 && (
                <div className="submitted-data">
                    <h2>User Details:</h2>
                    {data.name && (
                        <p><strong>Name: {" "}</strong>{data.name}</p>
                    )}
                    {data.email && (
                        <p><strong>Email: {" "}</strong>{data.email}</p>
                    )}
                    {data.message && (
                        <p><strong>Message: {" "}</strong>{data.message}</p>
                    )}
                </div>
            )}
        </>
    );
}

export default SubmittedData