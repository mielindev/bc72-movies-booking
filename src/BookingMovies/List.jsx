import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function List() {
  let listSeat = useSelector((state) => state.seatReducer.listSeat);
  let renderHeaderTable = () => {
    return listSeat[0].danhSachGhe.map((seat, index) => {
      return (
        <th key={index} className="p-2 font-bold text-yellow-400 text-xl">
          {seat.soGhe}
        </th>
      );
    });
  };
  let renderListSeats = () => {
    return listSeat.map((seat, index) => {
      return seat.hang !== "" ? (
        <tr key={index}>
          <td className="p-2 font-bold text-yellow-400 text-xl">{seat.hang}</td>
          {seat.danhSachGhe.map((item, index) => {
            return (
              <td key={index}>
                {item.daDat === true ? (
                  <button
                    disabled
                    className="btn btn-light w-3/4 mx-2 my-2 font-medium"
                  >
                    {item.soGhe}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                    className="btn btn-light w-3/4 mx-2 my-2 font-medium"
                  >
                    {item.soGhe}
                  </button>
                )}
              </td>
            );
          })}
        </tr>
      ) : undefined;
    });
  };
  let dispatch = useDispatch();
  let handleAddToCart = (seat) => {
    let action = {
      type: "ADD_TO_CART",
      payload: seat,
    };
    dispatch(action);
  };
  return (
    <div className="col-7">
      <div
        style={{
          borderBottom: "30px solid #eba134",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          height: "0",
          width: "80%",
          margin: "auto",
        }}
      >
        <h2 className="text-md text-white font-bold text-center">Màn hình</h2>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th></th>
            {renderHeaderTable()}
          </tr>
        </thead>
        <tbody>{renderListSeats()}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
