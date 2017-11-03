import {
  PLACE_MATERIAL,
  REMOVE_MATERIAL,
  SWAP_MATERIALS,
  CLEAR_MATERIALS,
  SET_MATERIALS
} from "../actions";

/**
 * The box state is made up of positions and
 * material IDs. There are 9 position in a box,
 * and a null value means that there is no material
 * in the position in the box.
 */
const initialState = {
  "0": null,
  "1": null,
  "2": null,
  "3": null,
  "4": null,
  "5": null,
  "6": null,
  "7": null,
  "8": null
};

/**
 * The craftBox reducer.
 * @param {*Object} state The craftBox state.
 * @param {*Object} action The action.
 */
function craftBox(state = initialState, action) {
  switch (action.type) {
    case PLACE_MATERIAL:
      const { materialId, position } = action;
      return {
        ...state,
        [position]: materialId
      };
    case REMOVE_MATERIAL:
      const { position } = action;
      return {
        ...state,
        [position]: null
      };
    case SWAP_MATERIALS:
      const { positionFrom, positionTo } = action;
      return {
        ...state,
        [positionFrom]: state[positionTo],
        [positionTo]: state[positionFrom]
      };
    case CLEAR_MATERIALS:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
