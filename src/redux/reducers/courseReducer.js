import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
      // map returns a new array.
      // Replacing the element with the matching course.id.
      // The value is the array is replaced and the order of the array is unchanged.
      // Return is implied because it's a single expression within {} after the =>.
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      // Whatever was returned from the API will simply replace what was in our state.
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
