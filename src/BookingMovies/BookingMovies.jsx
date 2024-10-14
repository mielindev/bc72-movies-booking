import React from "react";
import background from "../image/bgmovie.jpg";
import List from "./List";
import Cart from "./Cart";

export default function BookingMovies() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "110vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.6)`,
          width: "100%",
          height: "110vh",
        }}
      >
        <h2 className="text-uppercase text-center pb-2 text-yellow-600 text-3xl font-bold">
          đặt vé xem phim
        </h2>
        <div className="row mx-auto">
          <List />
          <Cart />
        </div>
      </div>
    </div>
  );
}
