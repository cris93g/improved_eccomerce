import axios from "axios";

const READ_ITEMS = "READ_ITEMS";
const READ_USERS = "READ_USERS";
const ADD_ITEM = "ADD_ITEM";
const GET_ITEM_FROM_USER = "GET_ITEM_FROM_USER";

export function read_items() {
  return {
    type: READ_ITEMS,
    payload: axios.get(`/api/fetch_items`)
  };
}

// export function add_item(item) {
//   return {
//     type: ADD_ITEM,
//     payload: axios.post(`http://localhost:3001/api/fetch_items`)
//   };
// }

const initial_state = {
  items: [],
  is_loading: false
};

export default function item_reducer(state = initial_state, action) {
  switch (action.type) {
    case `${READ_ITEMS}_PENDING`:
      return { ...state, is_loading: true };
    case `${READ_ITEMS}_COMPLETED`:
      return { ...state, items: action.payload.data, is_loading: false };
    case `${READ_ITEMS}_REJECTED`:
      return { ...state, is_loading: true };
    default:
      return state;
  }
}
