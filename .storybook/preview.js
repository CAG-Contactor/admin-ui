/** @type { import('@storybook/react').Preview } */
import "../src/App.css"; // Byt ut med sökvägen till din CSS-fil

const preview = {
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
