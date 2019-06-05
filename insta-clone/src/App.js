import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import {WithAuthenticate} from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login'
// import {dummyData} from './dummy-data';
// import SearchBar from './components/SearchBar/SearchBar';
// import PostsContainer from './components/PostContainer/PostsContainer';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
    }
  }
  
  render(){
    return (
    <div className = 'app-container'>
      <ComponentFromWithAuthenticate />
      {/* <SearchBar 
        data = {this.state.data} 
        key={this.state.data.id} 
        filteredResults = {this.filterResults}
      />
      <PostsContainer 
        posts = {this.state.filtered.length>0? this.state.filtered : this.state.data} 
      /> */}
    </div>
    );
  }
}
const ComponentFromWithAuthenticate = WithAuthenticate(PostsPage)(Login)
// App.propTypes = {
//     data: PropTypes.shape({
//       id: PropTypes.string,
//       username: PropTypes.string,
//       thumbnailUrl: PropTypes.string,  
//       imageUrl:PropTypes.string,
//       likes: PropTypes.number,
//       timestamp: PropTypes.string,
//     })
// }

export default App;
