import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from 'config/styles';

class EmailField extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    errorMessage: '',
    type: 'text',
    placeholder: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.props.onChange(value);
  }

  handleBlur({ target }) {
    const { value } = target;
    this.props.onBlur(value);
  }

  render() {
    return (
      <Field>
        <div className="input-group">
          <input
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <span className="underline" />
        </div>
        <div className="errors-group">{this.props.errorMessage}</div>
      </Field>
    );
  }
}

const Field = styled.div`
  margin-bottom: 10px;
  .input-group {
    position: relative;
    input {
      border: none;
      background-color: transparent;
      border-bottom: 1px solid white;
      color: white;
      padding: 10px 0;
      font-size: 1.2em;
      width: 100%;
      &:focus {
        outline: none;
      }
      &::-webkit-input-placeholder {
        color: white;
        opacity: 0.8;
      }
      &:focus::-webkit-input-placeholder {
        color: ${() => styles.colors.secondary};
      }
      &:focus + .underline {
        transform: scale(1);
      }
    }
    .underline {
      background-color: ${() => styles.colors.secondary};
      display: inline-block;
      height: 2px;
      margin-top: -4px;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scale(0, 1);
      transition: all 0.2s linear;
      width: 100%;
    }
  }
  .errors-group {
    color: ${() => styles.colors.error};
    font-size: 0.8em;
    padding-top: 10px;
  }
`;

export default EmailField;
