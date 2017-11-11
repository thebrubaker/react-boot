import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Joi from 'joi-browser';
import SubmitButton from 'components/buttons/submit-button';
import InputField from './input-field';
import schema from './schema';

/**
 * The component for logging a user into the application.
 */
class LoginForm extends React.Component {
  /**
   * Prop types
   */
  static propTypes = {
    className: PropTypes.string,
  };

  /**
   * Default prop values
   */
  static defaultProps = {
    className: '',
  };

  /**
   * The constructor for the component.
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.showError = this.showError.bind(this);
    this.state = {
      email: {
        value: '',
        showError: false,
        errors: [],
      },
      password: {
        value: '',
        showError: false,
        errors: [],
      },
    };
  }

  /**
   * Returns only the values of each field.
   */
  get formValues() {
    return Object.keys(this.state).reduce(
      (carry, key) => ({
        ...carry,
        [key]: this.state[key].value,
      }),
      {},
    );
  }

  /**
   * Handle the change of a form field.
   * @param {*String} name The name of the field.
   * @param {*String} value The value of the field.
   */
  handleChange(name, value) {
    this.setState(
      {
        ...this.state,
        [name]: {
          ...this.state[name],
          value,
        },
      },
      this.validateForm,
    );
  }

  showError(name) {
    this.setState({
      [name]: {
        ...this.state[name],
        showError: true,
      },
    });
  }

  /**
   * Pass all field values through validation.
   */
  validateForm() {
    const result = Joi.validate(this.formValues, schema, {
      abortEarly: false,
    });

    if (!result.error) {
      return this.resetErrors();
    }

    return this.setState(
      result.error.details.reduce(
        (carry, error) => ({
          ...carry,
          [error.context.key]: {
            ...this.state[error.context.key],
            errors: [...(carry[error.context.key] || []), error.message],
          },
        }),
        {},
      ),
    );
  }

  resetErrors() {
    this.setState({
      email: {
        ...this.state.email,
        errors: [],
      },
      password: {
        ...this.state.password,
        errors: [],
      },
    });
  }

  /**
   * Renders the form and fields for logging a user into the application.
   */
  render() {
    const { email, password } = this.state;
    return (
      <Form className={this.props.className}>
        <InputField
          type="email"
          placeholder="Email"
          value={email.value}
          errorMessage={email.errors[0]}
          onChange={value => this.handleChange('email', value)}
          onBlur={() => this.showError('email')}
          showError={email.showError}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password.value}
          errorMessage={password.errors[0]}
          onChange={value => this.handleChange('password', value)}
          onBlur={() => this.showError('password')}
          showError={password.showError}
        />
        <SubmitButton>Sign In</SubmitButton>
      </Form>
    );
  }
}

const Form = styled.form`
  button {
    margin-top: 15px;
  }
`;

export default LoginForm;
