import React, { useContext } from "react";
import ResortContext from "../context/resortContext";
import Room from "../components/Room";
const RoomsList = () => {
  const resortContext = useContext(ResortContext);
  const { sortedRooms } = resortContext;
  if (sortedRooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms matched your search</h3>
      </div>
    );
  }

  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {sortedRooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
