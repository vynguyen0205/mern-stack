import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <div style={{ marginTop: "20px" }}>
        <button className="yellow darken-3 btn-flat" onClick={onCancel}>
          Back
        </button>
        <button
          onClick={() => {
            toast("Hang on, we are sending your emails...", {
              position: toast.POSITION.BOTTOM_CENTER
            });
            submitSurvey(formValues, history);
          }}
          className="teal right btn-flat white-text"
        >
          Send Survey
          <i className="material-icons right">emails</i>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
