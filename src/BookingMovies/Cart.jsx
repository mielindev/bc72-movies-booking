import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  let dataCart = useSelector((state) => state.seatReducer.cart);
  let total = 0;
  let renderCart = () => {
    return dataCart.map((item, index) => {
      total += item.gia;
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
          <td>
            <button
              onClick={() => {
                handleRemove(item);
              }}
              className="btn btn-danger"
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  let dispatch = useDispatch();
  let handleRemove = (seat) => {
    let action = {
      type: "REMOVE",
      payload: seat,
    };
    dispatch(action);
  };
  let handleReset = () => {
    let action = {
      type: "RESET",
    };
    dispatch(action);
  };
  return (
    <div className="col-5">
      <h2 className="text-2xl text-center text-white font-bold text-uppercase">
        Danh sách ghế đã chọn
      </h2>
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
        <tfoot>
          <tr>
            <td>Tổng tiền</td>
            <td>{total}</td>
            <td>
              {total === 0 ? null : (
                <button onClick={handleReset} className="btn btn-success">
                  Thanh toán
                </button>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
