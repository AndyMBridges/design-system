import * as React from "react";
import { PropertyControls, ControlType, Scroll, Stack } from "framer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import "./fonts/nbs-medium/nbs-medium.css";
import "./fonts/nbs-bold/nbs-bold.css";
import { NBSButton } from "./NBSButton";

const ModalBoxComponent = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #bdbfc0;
  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),
    1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  > header,
  > footer {
    padding: 18px;
    font-size: 24px;
    font-family: 'Helvetica', Arial;
    flex-shrink: 0;
  }

  > header {
    border-bottom: 1px solid #bdbfc0;
  }

  > section {
    flex: 1;
    overflow: hidden;
    position: relative;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: auto;
    }
  }

  > footer {
    border-top: 1px solid #bdbfc0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button:nth-child(1) {
      margin-right: 20px;
    }
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
  title: string;
  width: number;
  height: number;
  modalContent?: any;
};

export class NBSModalBox extends React.Component<Props, any> {
  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <ModalBoxComponent
        style={{ width: this.props.width, height: this.props.height }}
      >
        <header>{this.props.title}</header>
        <section>
          <Scroll {...this.props} direction="vertical">
            {this.props.children}
          </Scroll>
        </section>
        <footer>
          <div style={{minHeight: 48}}>
           
          </div>
        </footer>
      </ModalBoxComponent>
    );
  }

  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: Props = {
    title: "Hello World!",
    width: 200,
    height: 200,
    ...Scroll.defaultProps,
  };

  // Add Framer UI for this component (in the properties panel)
  // https://framer.com/learn/docs/components#code
  static propertyControls: PropertyControls<Props> = {
    title: { type: ControlType.String, title: "Title" },
    ...Scroll.propertyControls,
  };
}
