import Grandchild from "./Grandchild"

function Child({child}) {
    return (
        <>
            <p>{child.name} is {child.age} years old.</p>
            {child.grandchildren.map((grandchild, index) => {
                return (
                    <Grandchild key={index} name={grandchild.name} hobby={grandchild.hobby}/>
                )
            })}
        </>
    )
}

export default Child