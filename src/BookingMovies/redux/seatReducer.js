import { seatArr } from "./dataSeat";

let initialState = {
  listSeat: seatArr,
  cart: [],
};

let seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let data = action.payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.soGhe === data.soGhe;
      });
      let cloneList = [...state.listSeat];
      if (index === -1) {
        cloneCart.push(data);
        data.daDat = true;
        // let disButton = document.querySelector("button").value === data.soGhe;
        // disButton.disable = true;
      }
      return { ...state, listSeat: cloneList, cart: cloneCart };
    }
    case "REMOVE": {
      let data = action.payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.soGhe === data.soGhe;
      });
      cloneCart.splice(index, 1);
      data.daDat = false;
      let cloneList = [...state.listSeat];
      return { ...state, listSeat: cloneList, cart: cloneCart };
    }
    case "RESET": {
      let cloneCart = [];
      let cloneList = [...state.listSeat];
      console.log("👉 ~ seatReducer ~ cloneList:", cloneList);
      return { ...state, listSeat: cloneList, cart: cloneCart };
    }
    default:
      return state;
  }
};

// Đẩy shoeReducer ra ngoài để import vào store tại index.js
export default seatReducer;
