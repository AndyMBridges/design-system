import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "./fonts/nbs-medium/nbs-medium.css";
import "./fonts/nbs-bold/nbs-bold.css";
import { NBSEditableText } from "./NBSEditableText";

const NBSRow = styled.div<any>`
  padding: 5px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 45px;

  ${props => {
    if (props.even) {
      return css`
        background: #f5f8ff;
      `;
    }
  }}

  > div {
    width: 50%;
    flex-shrink: 0;
  }

  > div:nth-child(1) {
    font-family: "Helvetica","Arial",sans-serif;
    text-align: left;
  }
`;

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

// Everything below is standard React. If you are new, start here:
// https://reactjs.org/docs/getting-started.html#learn-react
// https://reactjs.org/docs/components-and-props.html

// We can tell TypeScript to help us by defining our types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
type Props = {
  label: string;
  value: string;
  type: string;
  width: any;
  height: any;
  even: boolean;
  options: string;
};

export class NBSEditableRow extends React.Component<Props> {
  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <NBSRow
        style={{ width: this.props.width, height: this.props.height }}
        even={this.props.even}
      >
        <div>{this.props.label}</div>
        <NBSEditableText options={this.props.options} text={this.props.value} type={this.props.type} />
      </NBSRow>
    );
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    label: "Label",
    value: "10,000",
    type: "readonly",
    width: "100%",
    height: "45px",
    even: false,
    options: "Option One, Option Two, Option Three"
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    options: { type: ControlType.String, title: "Options" },
    label: { type: ControlType.String, title: "Label" },
    value: { type: ControlType.String, title: "Value" },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ["readonly", "input", "select"]
    },
    even: { type: ControlType.Boolean, title: "Even" }
  };
}
