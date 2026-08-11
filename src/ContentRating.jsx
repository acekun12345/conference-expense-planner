import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1
    }));
  };

  render() {
    return (
      <div className="content-rating">
        <p>
          React is a JavaScript library used for building interactive
          user interfaces. It allows developers to create reusable
          components that manage their own data and behavior. React uses
          a component-based approach that makes applications easier to
          organize and maintain. It is commonly used for modern websites
          and single-page applications.
        </p>

        <div className="rating-buttons">
          <button onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>

          <button onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;