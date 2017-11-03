const PLACE_MATERIAL = 'PLACE_MATERIAL';
const REMOVE_MATERIAL = 'REMOVE_MATERIAL';
const SWAP_MATERIALS = 'SWAP_MATERIALS';
const CLEAR_MATERIALS = 'CLEAR_MATERIALS';
const SET_MATERIALS = 'SET_MATERIALS';


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
    type: swapMaterials,
    payload: {
      positionFrom,
      positionTo
    }
  })
}
