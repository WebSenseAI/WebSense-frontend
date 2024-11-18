import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';
import Header from '../src/components/common/Header.vue';
import '../src/style.css';

setup((app) => {
  app.component('Header', Header);
  app.mixin({
    /* My mixin */
  });
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
