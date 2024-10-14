import React from "react";
import background from "../image/bgmovie.jpg";
import NameFill from "./NameFill";
import ListSeat from "./ListSeat";
import CartSeat from "./CartSeat";

export default function BookingMovies() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-uppercase text-center py-4 text-white text-4xl font-medium">
        Movie Seat Selection
      </h2>
      <div
        style={{
          backgroundColor: `rgba(128, 128, 128, 0.34)`,
        }}
        className="d-flex mx-auto w-1/2 p-10"
      >
        <div className="content w-100">
          <NameFill />
          <ListSeat />
          <CartSeat />
        </div>
      </div>
    </div>
  );
}
