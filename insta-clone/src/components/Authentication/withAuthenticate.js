import React from 'react';
import Login from '../Login/Login'

export const WithAuthenticate = PostsPage => Login=>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                loggedIn: false,
            }
        }
        componentDidMount(){
            JSON.parse(localStorage.getItem('user'))? this.setState({loggedIn:true}): this.setState({loggedIn:false})
        }

        render(){
            if(this.state.loggedIn) return <PostsPage/>    
            return <Login />
                }
    };
}