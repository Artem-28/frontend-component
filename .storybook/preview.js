import '!style-loader!css-loader!sass-loader!../src/styles/element-variables.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/storybook/index.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/utilities/_index.scss';

import '!style-loader!css-loader!sass-loader!../src/styles/base/index.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/modules/index.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/fonts/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}