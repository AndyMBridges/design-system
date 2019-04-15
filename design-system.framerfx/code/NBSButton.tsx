import * as React from "react";
import { PropertyControls, ControlType, Frame } from "framer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

// Everything below is standard React. If you are new, start here:
// https://reactjs.org/docs/getting-started.html#learn-react
// https://reactjs.org/docs/components-and-props.html

// We can tell TypeScript to help us by defining our types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
type Props = {
  text?: string;
  disabled: boolean;
  type: string;
  size: string;
  block: boolean;
};

const disabledStyle = css`
  &:disabled {
    border-color: #737373;
    background-color: #eaebed;
    color: #737373;
  }
`;

const disabledLinkStyle = css`
  &:disabled {
    border-color: transparent;
    background-color: transparent;
    color: #737373;
  }
`;

const NBSStyledButton = styled.button<Props>`
  border-radius: 5px;
  min-height: 48px; 
  border-width: 1px;
  border-style: solid;
  height: auto;
  position: relative;
  // Type
  ${props => {
    const { type } = props;
    switch (type) {
      case "secondary":
        return css`
          border-color: rgb(16, 112, 212);
          background-color: #ffffff;
          color: rgb(16, 112, 212);
          &:focus,
          &:hover {
            box-shadow: 0 0 0 3px #add2f9;
          }
          ${disabledStyle}
        `;
      case "link":
        return css`
          border-color: transparent;
          background-color: transparent;
          color: rgb(16, 112, 212);
          &:focus,
          &:hover {
            color: rgb(0, 49, 94);
          }
          ${disabledLinkStyle}
        `;
      case "primary":
      default:
        return css`
          border-color: rgb(16, 112, 212);
          background-color: rgb(16, 112, 212);
          color: #ffffff;
          &:focus,
          &:hover {
            background-color: rgb(0, 49, 94);
            box-shadow: 0 0 0 3px #add2f9;
          }
          ${disabledStyle}
        `;
    }
  }}
  // Size CSS
  ${props => {
    const { size } = props;
    switch (size) {
      case "xsmall":
        return css`
          padding: 1px 7px;
          font-size: 14px;
          line-height: 24px;
          min-height: auto;
        `;
      case "small":
        return css`
          padding: 12px 23px;
          font-size: 15px;
          line-height: 18px;
          min-height: auto;
        `;
      case "large":
        return css`
          padding: 18px 24px;
          font-size: 21px;
          line-height: 30px;
        `;
      case "medium":
      default:
        return css`
          padding: 12px 27px;
          font-size: 18px;
          line-height: 24px;
        `;
    }
  }}
  // Block CSS
  ${props => {
    const { block } = props;
    return css`
      width: ${block ? "100%" : "auto"};
    `;
  }}
`;

export class NBSButton extends React.Component<Props> {
  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <NBSStyledButton
        type={this.props.type}
        disabled={this.props.disabled}
        size={this.props.size}
        block={this.props.block}
      >
        {this.props.text}
      </NBSStyledButton>
    );
    // return <div style={style}>{this.props.text}</div>;
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    text: "Primary",
    type: "primary",
    disabled: false,
    size: "medium",
    block: false
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    block: { type: ControlType.Boolean, title: "Block" },
    type: { type: ControlType.Enum, title: "Type" ,  options: ["primary", "secondary", "link"] },
    size: { type: ControlType.Enum, title: "Size", options: ["small", "medium", "large", "xsmall"] }
  };
}
