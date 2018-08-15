import React, { Component } from "react";
import { Col } from "react-grid-system";

class IssueList extends Component {
  render() {
    return (
      <div>
        {this.props.issues.map(issue => {
          return (
            <Col lg={2}>
              <p>
                <strong>{issue.title}</strong>
              </p>
              <p>{issue.body}</p>
              <p>{issue.state}</p>
            </Col>
          );
        })}
      </div>
    );
  }
}

export default IssueList;
