import {
  ADD_MAINCATEGORY_RED,
  DELETE_MAINCATEGORY,
  GET_MAINCATEGORY_RED,
  UPDATE_MAINCATEGORY_RED,
} from "../Constants";
export default function MaincategoryReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_MAINCATEGORY_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;

    case GET_MAINCATEGORY_RED:
      return action.payload;

    case UPDATE_MAINCATEGORY_RED:
      index = state.findIndex((x)=>x.id === action.payload.id)
      state[index].name = action.payload.name
      state[index].active = action.payload.active
      return state
      // return state.map((x) =>
      //   x.id == action.payload.id ? { ...x, name: action.payload.name, active: action.payload.active } : x  // Update both name and active
      // );
    case DELETE_MAINCATEGORY:
      return state.filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
}
