import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "./fonts/nbs-medium/nbs-medium.css";
import "./fonts/nbs-bold/nbs-bold.css";

const ComponentText = styled.div<any>`
  display: block;
  width: 100%;
  height: 34px;
  font-size: 16px;
  line-height: 34px;
  text-align: right;
  position: relative;
  font-family: "Helvetica","Arial",sans-serif;
`;

const commonInputStyles = css `
  display: block;
  width:100%;
  height: 34px;
  border: 1px solid rgb(98, 98, 98);
  font-size: 16px;
  line-height: 34px;
  text-align: right;
  position: relative;
  border-radius: 5px;
  padding: 0px 12px;
  text-align: left;
  background: #ffffff;
  font-family: "Helvetica","Arial",sans-serif;
`;

const ComponentInput = styled.input`
  ${commonInputStyles}
`;

const ComponentSelect = styled.select`
  ${commonInputStyles}
`;

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

// Everything below is standard React. If you are new, start here:
// https://reactjs.org/docs/getting-started.html#learn-react
// https://reactjs.org/docs/components-and-props.html

// We can tell TypeScript to help us by defining our types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
type Props = { text: string; type: string; options: string };

export class NBSEditableText extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = { value: props.text };
  }

  onChangeHandler = e => {
    this.setState({ value: e.target.value });
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    const { type, text, options } = this.props;
    const { value } = this.state;
    if (type === "input") {
      return (
        <ComponentInput value={value} onChange={this.onChangeHandler} />
      );
    } else if (type === "select") {
      const optionsData = options.split(',').map(i => i.trim());
      return (
        <ComponentSelect>
          <option value={text}>{text}</option>
          {optionsData.map(item => <option value={item}>{item}</option>)}
        </ComponentSelect>
      );
    }
    return (
      <ComponentText>
        {text}
        {/* <img src="https://image.flaticon.com/icons/svg/120/120890.svg" /> */}
      </ComponentText>
    );
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    text: "Hello World!",
    type: "readonly",
    options: "Option One, Option Two, Option Three",
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    options: { type: ControlType.String, title: "Options" },
    text: { type: ControlType.String, title: "Text" },
    type: {
      type: ControlType.Enum,
      title: "Type",
      options: ["readonly", "input", "select"]
    }
  };
}
