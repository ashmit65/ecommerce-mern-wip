import {
  ADD_SUBCATEGORY_RED,
  DELETE_SUBCATEGORY,
  GET_SUBCATEGORY_RED,
  UPDATE_SUBCATEGORY_RED,
} from "../Constants";
export default function SubcategoryReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_SUBCATEGORY_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;

    case GET_SUBCATEGORY_RED:
      return action.payload;

    case UPDATE_SUBCATEGORY_RED:
      index = state.findIndex((x)=>x.id === action.payload.id)
      state[index].name = action.payload.name
      state[index].active = action.payload.active
      return state
      // return state.map((x) =>
      //   x.id == action.payload.id ? { ...x, name: action.payload.name, active: action.payload.active } : x  // Update both name and active
      // );
    case DELETE_SUBCATEGORY:
      return state.filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
}
