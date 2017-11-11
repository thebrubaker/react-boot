import React from 'react';
import styles from 'config/styles';
import Button from './button';

const { colors } = styles;

class SubmitButton extends React.Component {
  static defaultProps = {
    onSubmit: () => {},
    outline: false,
    color: colors.primary,
  };

  render() {
    if (this.props.outline) {
      return (
        <OutlineButton className={this.props.className} onClick={this.onSubmit}>
          {this.props.children}
        </OutlineButton>
      );
    }

    if (this.props.transparent) {
      return (
        <TransparentButton className={this.props.className} onClick={this.onSubmit}>
          {this.props.children}
        </TransparentButton>
      );
    }

    return (
      <FillButton className={this.props.className} onClick={this.onSubmit}>
        {this.props.children}
      </FillButton>
    );
  }
}

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

export default SubmitButton;
