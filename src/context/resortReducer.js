import {
  SET_ROOMS,
  GET_ROOM,
  FILTER_ROOMS_TYPE,
  FILTER_ROOMS_CAPACITY,
  FILTER_ROOMS_PRICE,
  FILTER_ROOMS_BREAKFAST,
  FILTER_ROOMS_PETS
} from "./Type";

export default (state, action) => {
  switch (action.type) {
    case SET_ROOMS: {
      return {
        ...state,
        rooms: action.payload,
        featuredRooms: action.payload.filter(room => room.featured === true),
        sortedRooms: action.payload,
        maxPrice: Math.max(...action.payload.map(room => room.price)),
        maxSize: Math.max(...action.payload.map(room => room.size)),
        type: [state.type, ...new Set(action.payload.map(room => room.type))],
        capacity: [
          state.capacity,
          ...new Set(action.payload.map(room => room.capacity))
        ],
        loading: false,
        currentPrice: Math.max(...action.payload.map(room => room.price))
      };
    }

    case GET_ROOM: {
      return {
        ...state,
        room: state.rooms.find(room => room.slug === action.payload)
      };
    }

    case FILTER_ROOMS_TYPE: {
      return {
        ...state,

        sortedRooms:
          action.payload !== "all"
            ? state.rooms.filter(
                item =>
                  item.type === action.payload &&
                  item.capacity >= state.currentCapacity &&
                  item.price <= state.currentPrice
              )
            : state.rooms.filter(
                item =>
                  item.capacity >= state.currentCapacity &&
                  item.price <= state.currentPrice
              ),
        currentType: action.payload
      };
    }
    case FILTER_ROOMS_CAPACITY: {
      return {
        ...state,

        sortedRooms:
          parseInt(action.payload) !== 1
            ? state.sortedRooms.filter(
                item =>
                  item.capacity >= parseInt(action.payload) &&
                  item.price <= state.currentPrice
              )
            : state.currentType !== "all"
            ? state.rooms.filter(item => item.type === state.currentType)
            : state.rooms,
        currentCapacity: action.payload
      };
    }
    case FILTER_ROOMS_PRICE: {
      return {
        ...state,
        sortedRooms:
          state.currentType !== "all"
            ? state.rooms.filter(
                item =>
                  item.price <= parseInt(action.payload) &&
                  item.type === state.currentType &&
                  item.capacity >= state.currentCapacity
              )
            : state.rooms.filter(
                item =>
                  item.price <= parseInt(action.payload) &&
                  item.capacity >= state.currentCapacity
              ),

        currentPrice: parseInt(action.payload)
      };
    }
    case FILTER_ROOMS_BREAKFAST: {
      return {
        ...state,
        sortedRooms:
          state.currentType !== "all"
            ? state.currentBreakFast === false
              ? state.rooms.filter(
                  item =>
                    item.type === state.currentType &&
                    item.capacity >= state.currentCapacity &&
                    item.price <= state.currentPrice &&
                    item.breakfast === !state.currentBreakFast
                )
              : state.rooms.filter(
                  item =>
                    item.capacity >= state.currentCapacity &&
                    item.price <= state.currentPrice
                )
            : state.rooms.filter(
                item =>
                  item.capacity >= state.currentCapacity &&
                  item.price <= state.currentPrice &&
                  item.breakfast === !state.currentBreakFast
              ),

        currentBreakFast: !state.currentBreakFast
      };
    }
    case FILTER_ROOMS_PETS: {
      console.log(state.currentPets);
      return {
        ...state,
        sortedRooms:
          state.currentType !== "all"
            ? state.currentPets === false
              ? state.rooms.filter(
                  item =>
                    item.type === state.currentType &&
                    item.capacity >= state.currentCapacity &&
                    item.price <= state.currentPrice &&
                    item.pets === !state.currentPets
                )
              : state.rooms.filter(
                  item =>
                    item.capacity >= state.currentCapacity &&
                    item.price <= state.currentPrice
                )
            : state.rooms.filter(
                item =>
                  item.capacity >= state.currentCapacity &&
                  item.price <= state.currentPrice &&
                  item.pets === !state.currentPets
              ),

        currentPets: !state.currentPets
      };
    }

    default:
      return state;
  }
};
