export const SET_MATERIAL_FORM_FIELD = 'SET_MATERIAL_FORM_FIELD';

/**
 * The action creator for setting a field on the materials form.
 * @param {*String} name The name of the field to set.
 * @param {*String|Number|Boolean|Array} value The value to set.
 * @param {*Boolean} isValid If the value is valid.
 * @param {*Array} errors The array of error messages.
 */
export const setMaterialFormField = (
  name,
  value,
  isValid,
  errors,
) => dispatch => {
  dispatch({
    type: SET_MATERIAL_FORM_FIELD,
    payload: {
      name,
      value,
      isValid,
      errors,
    },
  });
};
