import React, { useReducer, useEffect } from "react";
import items from "../data";
import ResortReducer from "./resortReducer";
import ResortContext from "./resortContext";
import {
  SET_ROOMS,
  GET_ROOM,
  FILTER_ROOMS_TYPE,
  FILTER_ROOMS_CAPACITY,
  FILTER_ROOMS_PRICE,
  FILTER_ROOMS_BREAKFAST,
  FILTER_ROOMS_PETS
} from "./Type";

const ResortState = props => {
  const initialState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    room: null,
    loading: true,
    type: ["all"],
    capacity: [1],
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakFast: false,
    pets: false,
    currentType: "all",
    currentCapacity: 1,
    currentPrice: 0,
    currentBreakFast: false,
    currentPets: false
  };

  //getData

  useEffect(() => {
    let rooms = formatData(items);
    dispatch({ type: SET_ROOMS, payload: rooms });
  }, []);

  const formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = slug => {
    dispatch({ type: GET_ROOM, payload: slug });
  };

  const onChange = e => {
    console.log(e.target.type);
    const target = e.target;
    const value = e.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    filterRooms(name, value);
  };

  const filterRooms = (name, value) => {
    if (name === "type") {
      console.log(value);
      dispatch({ type: FILTER_ROOMS_TYPE, payload: value });
    }
    if (name === "capacity") {
      console.log(value);
      dispatch({ type: FILTER_ROOMS_CAPACITY, payload: value });
    }
    if (name === "price") {
      console.log(value);
      dispatch({ type: FILTER_ROOMS_PRICE, payload: value });
    }
    if (name === "pets") {
      console.log(value);
      dispatch({ type: FILTER_ROOMS_PETS, payload: value });
    }
    if (name === "breakfast") {
      console.log(value);
      dispatch({ type: FILTER_ROOMS_BREAKFAST, payload: value });
    }
  };
  const [state, dispatch] = useReducer(ResortReducer, initialState);

  return (
    <ResortContext.Provider
      value={{
        rooms: state.rooms,
        featuredRooms: state.featuredRooms,
        sortedRooms: state.sortedRooms,
        loading: state.loading,
        type: state.type,
        minPrice: state.minPrice,
        maxPrice: state.maxPrice,
        minSize: state.minSize,
        maxSize: state.maxSize,
        price: state.price,
        breakFast: state.breakFast,
        pets: state.pets,
        room: state.room,

        currentPets: state.currentPets,
        CurrentBreakFast: state.CurrentBreakFast,
        formatData,
        getRoom,
        onChange,
        filterRooms,
        capacity: state.capacity,
        currentCapacity: state.currentCapacity,
        currentPrice: state.currentPrice,
        currentType: state.currentType
      }}
    >
      {props.children}
    </ResortContext.Provider>
  );
};

export default ResortState;
