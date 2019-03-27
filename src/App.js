import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {

  // Our state. Lifted into the main App class so states are managed by the main parent. 
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Handler for deleting a counter
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  // Handler for incrementing the counter
  handleIncrement = counter => {
    // using spread operator to clone the counters from the state in an array
    const counters = [...this.state.counters];
    // grabbing the index of the counter we were passed using our array above.
    const index = counters.indexOf(counter);
    // setting the index counter to the clone object we were passed
    counters[index] = { ...counter };
    // we incrememt the new counter we copied
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    this.setState({
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]});

    //this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
