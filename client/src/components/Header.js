import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payment from "./Payment";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <li><a>...</a></li>;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with Google</a>
          </li>
        );
      default:
        return [
          <li key="payment">
            <Payment />
          </li>,
          <li key="credits" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="logout">
            <a href="/api/logout">Log out</a>{" "}
          </li>
        ];
    }
  }

  render() {
    return (
      <nav style={{ marginBottom: "20px" }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            &nbsp;EMAILY
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
