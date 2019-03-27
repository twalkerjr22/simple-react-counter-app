import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { brotliDecompress } from "zlib";

class Counter extends Component {
  // State managing the state of this Counter Object

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

  // HANDLERS
  // Function to handle the incremement button
  // We update the state of this components value to the new incremented value

  render() {
    console.log("props", this.props);
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

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // if the state value is 0 then we use the warning, otherwise we use the primary CSS class
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    // taking the object called value from the state and storing it.
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
