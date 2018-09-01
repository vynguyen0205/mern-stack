import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (!this.props.surveys.length) {
      return (
        <div className="card darken-1">
          <div className="card-content">
            <span className="card-title">
              Get started by creating a new survey!
            </span>
            <p>
              And easily get insights into your customers' preferences
              automatically recorded as soon as they respond.
            </p>
            <p className="right">Just 1 credit per survey</p>
          </div>
          <div className="card-action">
            <Link to="/surveys/new">Create a new survey now!</Link>
          </div>
        </div>
      );
    }
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey.id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
