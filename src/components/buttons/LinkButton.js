import React from 'react';
import styled from 'styled-components';
import styles from 'config/styles';
import { Link } from 'react-router-dom';
const { colors } = styles;

class LinkButton extends React.Component {
  static defaultProps = {
    to: '/',
    outline: false,
    color: colors.primary,
  };

  render() {
    if (this.props.outline) {
      return (
        <OutlineButton>
          <Link to={this.props.to}>{this.props.children}</Link>
        </OutlineButton>
      );
    }

    if (this.props.transparent) {
      return (
        <TransparentButton>
          <Link to={this.props.to}>{this.props.children}</Link>
        </TransparentButton>
      );
    }

    return (
      <FillButton>
        <Link to={this.props.to}>{this.props.children}</Link>
      </FillButton>
    );
  }
}

const Button = styled.button`
  color: white;
  border-radius: 6px;
  a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px 20px;
  }
`;

const OutlineButton = Button.extend`
  background-color: transparent;
  border: 2px solid ${() => colors.white};
  min-width: 120px;
`;

const TransparentButton = Button.extend`
  background-color: transparent;
  border: 0;
`;

const FillButton = Button.extend`
  background-color: ${() => colors.highlight};
  border: 1px solid ${() => colors.highlight};
`;

export default LinkButton;
