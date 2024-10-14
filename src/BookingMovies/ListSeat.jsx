import React from "react";
import { seatArr } from "./redux/dataSeat";

export default function ListSeat() {
  console.log("👉 ~ seatArr:", seatArr);

  let renderSeat = () => {
    return seatArr.map((seat, index) => {
      return (
        <tr key={index}>
          <td>{seat.hang}</td>
          {seat.danhSachGhe.map((item, index) => {
            return (
              <td key={index} className="p-3 border-2">
                <a href="#" value={item.soGhe}></a>
              </td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <div>
      <table width={"100%"}>
        <thead></thead>
        <tbody>{renderSeat()}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
