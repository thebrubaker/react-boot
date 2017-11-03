export const PLACE_MATERIAL = 'PLACE_MATERIAL';
export const REMOVE_MATERIAL = 'REMOVE_MATERIAL';
export const SWAP_MATERIALS = 'SWAP_MATERIALS';
export const CLEAR_MATERIALS = 'CLEAR_MATERIALS';
export const SET_MATERIALS = 'SET_MATERIALS';


const placeMaterial = (materialId, position) => dispatch => {
  dispatch({
    type: PLACE_MATERIAL,
    payload: {
      materialId,
      position
    }
  })
}

const removeMaterial = position => dispatch => {
  dispatch({
    type: REMOVE_MATERIAL,
    payload: {
      position
    }
  })
}

const swapMaterials = (positionFrom, positionTo) => dispatch => {
  dispatch({
    type: SWAP_MATERIALS,
    payload: {
      positionFrom,
      positionTo
    }
  })
}

const clearMaterials = () => dispatch => {
  dispatch({
    type: CLEAR_MATERIALS,
    payload: {}
  })
}

const setMaterials = box => dispatch => {
  dispatch({
    type: SET_MATERIALS,
    payload: {
      box
    }
  })
}
