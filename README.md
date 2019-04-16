# Example design system

FramerX:

* Open FramerFX file (FramerX folder format)
* Right click and ’Show package contents’ to view the folder structure or cd to the design-system.framerfx to see contents in your terminal
* Code components will be saved under design-system.framerfx/code
* See design-system.framerfx/code/NBSbutton.jsx as an example

Transfer component to Storybook:

* Run `npm install` inside /storybook directory followed by `npm run storybook`
* Create a new file storybook/src/stories/componentName.stories.js
* Copy over your component styles from design-system.framerfx/code/componentName.jsx
* Create a render method for your component and pass the props along with the label and editable text for knobs tab
* Create a variety of stories using ‘storiesOf’ and set the props for each state
* See storybook/src/stories/button.stories.js as an example
