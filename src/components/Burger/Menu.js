import React, { Component } from "react";
import { addCake, removeCake } from "../../redux/action/action";
import { connect } from "react-redux/es/exports";
class Menu extends Component {
  renderMenu = () => {
    return this.props.menu.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.dispatch(removeCake(item));
              }}
            >
              -
            </button>{" "}
            {item.amount}
            <button
              onClick={() => {
                this.props.dispatch(addCake(item));
                console.log(item.name);
              }}
            >
              +
            </button>
          </td>
          <td>{item.price}</td>
          <td>{item.price * item.amount}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div style={{ width: "50%" }}>
        <h3>Chọn thức ăn</h3>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Thức ăn</th>
            <th></th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>

          {this.renderMenu()}
          <tr>
            <td></td>
            <td></td>
            <td>Tổng cộng</td>
            <td>{this.props.total}$</td>
          </tr>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.burgerReducers.menu,
    total: state.burgerReducers.total,
  };
};
export default connect(mapStateToProps)(Menu);
