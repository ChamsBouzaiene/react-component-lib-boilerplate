module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
};
