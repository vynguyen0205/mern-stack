import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Use the card below!"
        description="4242 4242 4242 4242 - 01/20 - 555"
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payment);
