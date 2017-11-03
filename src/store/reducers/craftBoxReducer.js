import {
  PLACE_MATERIAL,
  REMOVE_MATERIAL,
  SWAP_MATERIALS,
  CLEAR_MATERIALS,
  SET_MATERIALS
} from '../actions'

const initialState = {
  '0': null,
  '1': null,
  '2': null,
  '3': null,
  '4': null,
  '5': null,
  '6': null,
  '7': null,
  '8': null,
}


function craftBox(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:

    default:
      return state
  }
}