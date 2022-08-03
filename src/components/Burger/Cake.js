import React, { Component } from "react";
import { connect } from "react-redux";
class Cake extends Component {
  renderCake = () => {
    return this.props.cake.map((element, index) => {
      return <div key={index} className={element.name}></div>;
    });
  };
  render() {
    return (
      <div style={{ width: "50%" }}>
        <h3>Bánh burger của bạn</h3>
        <div className="breadTop"></div>
        {this.renderCake()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cake: state.burgerReducers.burger,
  };
};
export default connect(mapStateToProps)(Cake);
