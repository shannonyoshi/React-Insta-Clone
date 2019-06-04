import React from 'react';
import {dummyData} from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      data: dummyData
    }
  }
 
  render(){
    return (
    <div className = 'app-container'>
      <SearchBar data = {this.state.data}/>
      {this.state.data.map(item=>(
      <PostContainer post = {item} key = {item.id}/>
      ))}
    </div>
    );
  }
}

App.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,  
      imageUrl:PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
    })
}

export default App;
