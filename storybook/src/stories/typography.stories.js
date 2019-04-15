import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import { Header } from 'semantic-ui-react';

const renderSmall = props => <small {...props} />;
const renderParagraph = props => <p {...props} />;
const renderHeader = props => <Header {...props} />;

storiesOf('Style Guide/Typography', module)
  .addStyled(
    'Heading',
    withInfo({})(() => [
      renderHeader({ as: 'h1', content: text('Heading 1', 'Heading 1') }),
      renderHeader({ as: 'h2', content: text('Heading 2', 'Heading 2') }),
      renderHeader({ as: 'h3', content: text('Heading 3', 'Heading 3') }),
      renderHeader({ as: 'h4', content: text('Heading 4', 'Heading 4') })
    ])
  )
  .addStyled(
    'Paragraph',
    withInfo({})(() => [
      renderParagraph({
        className: 'large',
        style: { fontWeight: 'bold', fontFamily: 'Helvetica' },
        children: text('Paragraph Large Bold', 'Paragraph Large Bold')
      }),
      renderParagraph({
        className: 'large',
        children: text('Paragraph Large', 'Paragraph Large')
      }),
      renderParagraph({
        style: { fontWeight: 'bold' },
        children: text('Paragraph Bold', 'Paragraph Bold')
      }),
      renderParagraph({ children: text('Paragraph', 'Paragraph') })
    ])
  )
  .addStyled(
    'Small',
    withInfo({})(() => [
      renderSmall({
        style: { fontWeight: 'bold' },
        children: text('Small Text Bold', 'Small Text Bold')
      }),
      renderSmall({ children: text('Small Text', 'Small Text') }),
      renderSmall({
        className: 'x-small-text',
        children: text('X-Small Text', 'X-Small Text')
      })
    ])
  );
