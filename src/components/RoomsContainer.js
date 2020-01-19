import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomsContainer = () => {
  return (
    <div>
      <RoomsFilter></RoomsFilter>
      <RoomsList></RoomsList>
    </div>
  );
};

export default RoomsContainer;
