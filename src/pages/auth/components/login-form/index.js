import React from 'react';
import styled from 'styled-components';
import SubmitButton from 'components/buttons/submit-button';
import InputField from './input-field';

/**
 * The component for logging a user into the application.
 */
class LoginForm extends React.Component {
  /**
   * The constructor for the component.
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: {
        value: '',
        errorMessage: '',
      },
      password: {
        value: '',
        errorMessage: '',
      },
    };
  }

  handleChange(name, value) {
    this.setState({
      ...this.state,
      [name]: {
        value,
        errorMessage: '',
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
          errorMessage={email.errorMessage}
          onChange={value => this.handleChange('email', value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password.value}
          errorMessage={password.errorMessage}
          onChange={value => this.handleChange('password', value)}
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
