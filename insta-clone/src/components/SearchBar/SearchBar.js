import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                filtered: []
            }
    }
    componentDidMount(){
        this.setState({filtered:this.props.data})
    }
    componentWillReceiveProps(nextProps){
        this.setState({filtered:nextProps.data})
    }
    // handleChange(e){
    //     let currentPosts =[];
    //     let filteredPosts=[];
    //     if (e.target.value !== ''){
    //         currentPosts = this.props.data;
    //         filteredPosts = currentPosts.filter(item=>{
    //             let lowerCase= item.comments.text
    //         })
    //     }
    // }
    render(){
        return(
            <div className='search-bar'>
                <div className = 'search-left'>
                <i className = 'fab fa-instagram'/>
                <h2 className = 'brand'>Instagram</h2>
                </div>
                <input 
                    type='text'
                    className='input'
                    placeholder='&#xf002; search'
                />
                <div className='search-right'>
                    <i className = 'far fa-compass'/>
                    <i className='far fa-heart' />
                    <i className='far fa-user' />
                </div>
            </div>
        )
    }
}
export default SearchBar;