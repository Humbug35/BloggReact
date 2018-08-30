import React, { Component } from 'react';
import GetBlogPost from './getPost';
import './App.css';
import BlogEntry from './blogEntry';
import Pagination from './pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      showPost: null,
      total: null,
    }
  }
  getPost(page) {
    GetBlogPost(page)
    .then(blogPosts => {
      this.setState({
        posts: blogPosts.entries,
        showPost: null,
        total: blogPosts.total,
      })
    })
  }

  componentDidMount() {
    this.getPost()
  }
  handleClick(index) {
    this.setState({ showPost: index })
  }
  render() {
    const POST = this.state.posts.map((entry, i) => {
      if(this.state.showPost !== null && this.state.showPost === i) {
        return (
          <article onClick={() => this.handleClick(null)} key={i}>
            <BlogEntry entry={entry} />
            
          </article>
        )
      }else if(this.state.showPost === null) {
        return (
            <article onClick={() => this.handleClick(i)} key={i}>
              <BlogEntry entry={entry}/>
            </article>
        )
      } else {
        return null;
      }
    });

    return (
      <div>
        {POST}
        <Pagination getPost={(page) => this.getPost(page)} total={this.state.total} />
      </div>
    )
  }
}

export default App;
