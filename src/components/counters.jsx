import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-small m-2"
        >
          reset
        </button>
        {this.props.counters.map(counter => {
          return (
            <Counter
              counter={counter}
              key={counter.id}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
              value={counter.value}
              id={counter.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
