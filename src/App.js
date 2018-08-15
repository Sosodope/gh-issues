import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-grid-system";
import dataFile from "./data-file.json";
import IssueList from "./Components/IssueList";

class App extends Component {
  state = {
    issues: []
  };
  componentDidMount() {
    this.setState({ issues: dataFile });
  }
  render() {
    return (
      <Container>
        <Row>
          <IssueList issues={this.state.issues} />
        </Row>
      </Container>
    );
  }
}

export default App;
