import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "./fonts/nbs-medium/nbs-medium.css";
import "./fonts/nbs-bold/nbs-bold.css";

type TabButtonProps = {
  selected?: boolean;
};
const TabButton = styled.button<TabButtonProps>`
  font-family: "Helvetica", Arial;
  padding: 13px 16px;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  text-align: center;
  border-bottom: 2px solid
    ${props => (props.selected ? "rgb(0, 49, 94)" : "transparent")};
  font-weight: font-family: ${props => (props.selected ? 700 : 500)};
  color: ${props => (props.selected ? "rgb(59, 59, 59)" : "rgb(98, 98, 98)")};

`;

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

// Everything below is standard React. If you are new, start here:
// https://reactjs.org/docs/getting-started.html#learn-react
// https://reactjs.org/docs/components-and-props.html

// We can tell TypeScript to help us by defining our types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
type Props = { text: string; selected: boolean, display: string};

export class NBSTabsButton extends React.Component<Props> {
  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    if(this.props.display === 'none') {
      return null;
    }
    return <TabButton selected={this.props.selected}>{this.props.text}</TabButton>
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    text: "Tab One",
    selected: false,
    display: 'inline-block',
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    selected: { type: ControlType.Boolean, title: "Selected" },
    display: {type: ControlType.Enum, options:['inline-block', 'none']}
  };
}
