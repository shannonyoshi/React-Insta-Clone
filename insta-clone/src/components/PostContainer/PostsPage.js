import React from "react";
import { dummyData } from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostsContainer from "./PostsContainer";
import PropTypes from "prop-types";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtered: []
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  filterById = e => {};

  filterResults = e => {
    let currentPosts = [];
    let filteredPosts = [];
    if (e.target.value !== "") {
      currentPosts = this.state.data;
      filteredPosts = currentPosts.filter(item => {
        const lcUsername = item.username.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lcUsername.includes(filter);
      });
    } else {
      filteredPosts = this.state.data;
    }
    this.setState({ filtered: filteredPosts });
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar
          data={this.state.data}
          key={this.state.data.id}
          filteredResults={this.filterResults}
        />
        <PostsContainer
          posts={
            this.state.filtered.length > 0
              ? this.state.filtered
              : this.state.data
          }
        />
      </div>
    );
  }
}

PostsPage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

const filterById = filter(filterById, id, letter)

const filter = (functionName, filterArg, filterMatch) => {
  functionName = e => {
    if (filterArg !== "") {
      filteredPosts = this.state.data.filter(item => {
        if (typeof filterArg === "string") {
          return item.filterMatch
            .toLowerCase()
            .includes(filterArg.toLowerCase());
        } else {
          return item.filterMatch.includes(filterArg);
        }
      });
    } else {
      filteredPosts = this.state.data;
    }
    this.setState({ filtered: filtered });
  };
};

export default PostsPage;

