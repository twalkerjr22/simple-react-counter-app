import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { brotliDecompress } from "zlib";

class Counter extends Component {

  // Styles for the html elements
  styles = {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "fira sans"
  };

  // Function that checks if we have tags and returns a result based on that.
  renderTags() {
    // Check if we have some tags, if not we tell the user
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul style={this.styles}>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
   
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="button btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
      </div>
    );
  }

  // Function to show a different badge icon when the counter is zero
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  // If the counter is 0, we use the words Zero
  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
