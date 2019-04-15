import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';

import ProgressBar from '../components/progress-bar';

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
    padding: 3rem 18px;

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

const renderModal = (props, content) => (
  <div
    style={{
      width: '100%'
    }}
  >
  <ModalBoxComponent {...props} >
        <header>{props.heading}</header>
        <section>
            {content}
        </section>
        <footer>
            {props.footer}
        </footer>
  </ModalBoxComponent>
  </div>
);

storiesOf('Components', module).addStyled(
  'Modal',
  withInfo()(() =>
    renderModal({heading: 'Confirmation'}, text('Copy', 'Are you sure you want to update the data? This would be recorded for audit purposes.'))
  )
);
