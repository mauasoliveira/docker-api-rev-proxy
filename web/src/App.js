import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    brands: []
  };

  componentDidMount() {
    fetch("http://test_api.localhost/brands")
      .then(res => res.json())
      .then(result => this.setState({ brands: result }));
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.brands.map(x => {
              return (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>&nbsp;</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
