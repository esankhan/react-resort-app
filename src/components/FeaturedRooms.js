import React, { useContext } from "react";
import Room from "./Room";
import Loading from "./Loading";
import Title from "./Title";
import ResortContext from "../context/resortContext";

const FeaturedRooms = () => {
  const resortContext = useContext(ResortContext);
  const { featuredRooms, loading } = resortContext;

  let featuredRooms_1 = featuredRooms.map(room => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : featuredRooms_1}
      </div>
    </section>
  );
};

export default FeaturedRooms;
