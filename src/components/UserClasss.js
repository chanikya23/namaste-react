import React from "react";

class UsersClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            UserInfo:{
                login:'jhkjsk'
            }

        }
    }
    async componentDidMount(){
        const data= await fetch('https://api.github.com/users/chanikya23');
        const json = await data.json();
        this.setState({
            UserInfo:json,
        });
        // console.log(json);
    }

    render(){
        
        const {login, avatar_url} =this.state.UserInfo;
        return(
            <div className='user-card'>
                <h3>Name:{login}</h3>
                <h5>Email: chanikya@gmail.com</h5>
            </div>
        )
    }
}

export default UsersClass;