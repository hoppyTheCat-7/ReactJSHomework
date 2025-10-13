import Child from "./Child"

function Parent({ family }) {
    return (
        <>
            <h2>Family Tree</h2>
            <p>{family.name} has got two children.</p>
            {family.children.map((child, index) => {
                return (
                    <Child key={index} child={child} />
                )
            })}
        </>
    )
}

export default Parent