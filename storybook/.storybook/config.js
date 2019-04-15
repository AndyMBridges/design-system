import React from 'react';
import { Menu, Header } from 'semantic-ui-react';

import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import 'semantic-ui-css/semantic.min.css';
import './storybook.css';

setAddon({
  addStyled(storyName, storyFn) {
    this.add(storyName, context => {
      return (
        <div className="story">
          <Menu className="page-header" as="header" fixed="top" borderless>
            <Menu.Item>
              <Header as="h4">{`${context.kind} - ${storyName}`}</Header>
            </Menu.Item>
          </Menu>
          <div className="story-container">{storyFn(context)}</div>
        </div>
      );
    });
  }
});

// @addon-info defaults
setDefaults({
  inline: false,
  header: false
});

// misc. options
setOptions({
  name: 'Storybook demo',
  url: 'https://otorrillas.github.io/storybook-demo/'
});

addDecorator(withKnobs);
addDecorator(withA11y);


const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
