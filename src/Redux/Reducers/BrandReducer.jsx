import {
  ADD_BRAND_RED,
  DELETE_BRAND,
  GET_BRAND_RED,
  UPDATE_BRAND_RED,
} from "../Constants";
export default function BrandReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_BRAND_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;

    case GET_BRAND_RED:
      return action.payload;

    case UPDATE_BRAND_RED:
      index = state.findIndex((x)=>x.id === action.payload.id)
      state[index].name = action.payload.name
      state[index].pic = action.payload.pic
      state[index].active = action.payload.active
      return state
      // return state.map((x) =>
      //   x.id == action.payload.id ? { ...x, name: action.payload.name, active: action.payload.active } : x  // Update both name and active
      // );
    case DELETE_BRAND:
      return state.filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
}
