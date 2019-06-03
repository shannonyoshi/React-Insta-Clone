import React from 'react';
import {dummyData} from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
    {/* <SearchBar /> */}
    {this.state.data.map(item=>(
      <PostContainer post = {item}/>
    ))}
      

    </div>
    
      );
  }
  
}

export default App;
