import { seatArr } from "./dataSeat";

let initialState = {
  listSeat: seatArr,
  cart: [],
};

let seatReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Đẩy shoeReducer ra ngoài để import vào store tại index.js
export default seatReducer;
