import { Component } from "react"

class UserProfileClass extends Component {
    render() {
        // Version 1: w/ destructuring:
        const { name, age, hobby } = this.props;

        return (
            <div className="container class-container">
                <ul>
                    <li>Name: {name}</li>
                    <li>Age: {age}</li>
                    <li>Hobby: {hobby}</li>
                </ul>
            </div>
        );

        // Version 2: w/o destructuring:
        // return (
        //     <div className="container class-container">
        //         <ul>
        //             <li>Name: {this.props.name}</li>
        //             <li>Age: {this.props.age}</li>
        //             <li>Hobby: {this.props.hobby}</li>
        //         </ul>
        //     </div>
        // )
    }
}

export default UserProfileClass