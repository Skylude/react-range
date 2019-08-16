import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { initializeRTL } from 'storybook-addon-rtl';

initializeRTL();

addDecorator(
  withOptions({
    name: 'react-range',
    url: 'https://github.com/tajo/react-range',
    showAddonPanel: false,
    showSearchBox: false
  })
);

function loadStories() {
  require('./example.stories.js');
}

configure(loadStories, module);
