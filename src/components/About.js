import Users from "./Users";
import UsersClass from "./UserClasss";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        // console.log('Parent constructor comp')
    }
    
    render(){
        // console.log('parent render')
        return(
            <div className='m-5 p-5 bg-gray-200 rounded-lg'>
                <h1 className='font-bold'>This is from the About class Component</h1>
                <p>The component is rendered due to some react-router-dom library</p>
                {/* <Users name={'Chanikya Satish'}/> */}
    
                <UsersClass />    
            </div>
        )
    }
}

export default About;
