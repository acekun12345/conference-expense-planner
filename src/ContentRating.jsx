import React, { Component } from 'react';

class ContentRating extends Component {
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
          <button>Like (0)</button>
          <button>Dislike (0)</button>
        </div>
      </div>
    );
  }
}

export default ContentRating;