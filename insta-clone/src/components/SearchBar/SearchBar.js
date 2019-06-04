import React from 'react';
import './SearchBar.css'
import PostContainer from '../PostContainer/PostContainer'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                data : this.props,
                filtered: []
            }
    }
    componentDidMount(){
        this.setState({filtered:this.data})
    }
    componentWillReceiveProps(nextProps){
        this.setState({filtered:nextProps.data})
    }
    handleChange = e => {
        let currentPosts =[];
        let filteredPosts=[];
        if (e.target.value !== ''){
            currentPosts = this.props.data;
            filteredPosts = currentPosts.filter(item=>{
                const lcUsername= item.username.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lcUsername.includes(filter);
            })
        } else{
            filteredPosts = this.props.data;
        }
        this.setState({filtered: filteredPosts})
    }
    render(){
        return(
            <div>
                <div className='search-bar'>
                    <div className = 'search-left'>
                        <i className = 'fab fa-instagram'/>
                        <h2 className = 'brand'>Instagram</h2>
                    </div>

                    <input 
                        type='text'
                        className='input'
                        placeholder='&#xf002; search'
                        onChange={this.handleChange}
                    />
                    <div className='search-right'>
                        <i className = 'far fa-compass'/>
                        <i className='far fa-heart' />
                        <i className='far fa-user' />
                    </div>
                </div>
                {this.state.filtered.map(item=>(
                <PostContainer post = {item} key={item.id}/>
                ))}
            </div>
        )
    }
}
export default SearchBar;