export const SET_MATERIAL = 'SET_MATERIAL';
export const REMOVE_MATERIAL = 'REMOVE_MATERIAL';
export const SWAP_MATERIALS = 'SWAP_MATERIALS';
export const CLEAR_MATERIALS = 'CLEAR_MATERIALS';

/**
 * The action creator for setting a material into a specified
 * position.
 * @param {*String} materialId The id of the material to move.
 * @param {*String} position The position to set the material.
 */
export const setMaterial = (materialId, position) => dispatch => {
  dispatch({
    type: SET_MATERIAL,
    payload: {
      materialId,
      position,
    },
  });
};

/**
 * The action creator for removing a material from a specified
 * position.
 * @param {*String} position The position to remove.
 */
export const removeMaterial = position => dispatch => {
  dispatch({
    type: REMOVE_MATERIAL,
    payload: {
      position,
    },
  });
};

/**
 * The action creator for swapping two materials.
 * @param {*String} positionFrom The position to move from.
 * @param {*String} positionTo The position to move to.
 */
export const swapMaterials = (positionFrom, positionTo) => dispatch => {
  dispatch({
    type: SWAP_MATERIALS,
    payload: {
      positionFrom,
      positionTo,
    },
  });
};

/**
 * The action creator for clear all materials.
 */
export const clearMaterials = () => dispatch => {
  dispatch({
    type: CLEAR_MATERIALS,
    payload: {},
  });
};
