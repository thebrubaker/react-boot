import { SET_MATERIAL_FORM_FIELD } from 'store/actions';

/**
 * The initial state for the materials form.
 */
const initialState = {
  isLoading: false,
  isSaving: false,
  image: {
    isValid: false,
    value: '',
    errors: [],
  },
  name: {
    isValid: false,
    value: '',
    errors: [],
  },
  type: {
    isValid: false,
    value: '',
    errors: [],
  },
  biome: {
    isValid: false,
    value: '',
    errors: [],
  },
  rarity: {
    isValid: false,
    value: '',
    errors: [],
  },
  monsters: {
    isValid: false,
    value: [],
    errors: [],
  },
  price: {
    isValid: false,
    value: '',
    errors: [],
  },
};

/**
 * The materialForm reducer.
 * @param {*Object} state The materialForm state.
 * @param {*Object} action The action.
 */
export default function materialForm(state = initialState, action) {
  switch (action.type) {
    case SET_FIELD:
      const { payload } = action;
      const { name, ...field } = payload;
      return {
        ...state,
        [name]: field,
      };
    default:
      return state;
  }
}
