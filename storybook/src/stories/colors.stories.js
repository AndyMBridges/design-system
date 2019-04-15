import React from 'react';
import map from 'lodash/map';

// StoryBook
import { storiesOf } from '@storybook/react';

// UI elements
import { Card, Grid } from 'semantic-ui-react';

import siteVars from '../constants/site';

const renderColor = (color, name) => (
  <Card key={`color-${name}`} style={{ margin: '20px' }}>
    <div style={{ backgroundColor: color, width: '100%', height: '100px' }} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{color}</Card.Description>
    </Card.Content>
  </Card>
);

const renderColors = () => {
  const colorsGrid = {
    Light_Blue: siteVars.lightBlue,
    Medium_Blue: siteVars.mediumBlue,
    Dark_Blue: siteVars.darkBlue,
    Darker_Blue: siteVars.darkerBlue,
    Light_Grey: siteVars.lightGrey,
    Medium_Grey: siteVars.mediumGrey,
    Dark_Grey: siteVars.darkGrey
  };
  return (
    <Grid>{map(colorsGrid, (color, name) => renderColor(color, name))}</Grid>
  );
};

storiesOf('Style Guide', module).addStyled('Colors', () => renderColors());
