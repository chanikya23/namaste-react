import { useState } from "react";

const Users =(props)=>{
    const [count, setCount] = useState(0);
    const increment =() =>{
        setCount(count + 1); 
    }
    const decrement =() =>{
        setCount(count - 1); 
    }
    return(
        <div className='user-card'>
            <h2>Count: {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h3>Name:{props.name}</h3>
            <h4>Location: Hyderabad</h4>
            <h5>Email: chanikya@gmail.com</h5>
        </div>
    )
}

export default Users;