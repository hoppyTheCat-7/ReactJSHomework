// Version 1: w/ destructuring:
function UserProfileFunction({ name, age, hobby }) {
    return (
        <div className="container func-container">
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Hobby: {hobby}</li>
            </ul>
        </div>
    )
}

// Version 2: w/o destructuring:
// function UserProfileFunction(props) {
//     return (
//         <div className="container func-container">
//             <ul>
//                 <li>Name: {props.name}</li>
//                 <li>Age: {props.age}</li>
//                 <li>Hobby: {props.hobby}</li>
//             </ul>
//         </div>
//     )
// }

export default UserProfileFunction