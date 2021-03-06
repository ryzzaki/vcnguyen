const whitelister = require('purgecss-whitelister');

const purgecss =
  process.env.NODE_ENV === 'production'
    ? {
        '@fullhuman/postcss-purgecss': {
          content: [
            './src/pages/**/*.{ts,tsx}',
            './src/components/**/*.{ts,tsx}',
            './src/utils/**/*.{ts,tsx}',
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          whitelist: [
            'html',
            'body',
            ...whitelister('./node_modules/prismjs/themes/prism-tomorrow.css'),
          ],
        },
      }
    : {};

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-nested': {},
    'postcss-preset-env': { stage: 1 },
    autoprefixer: {},
    ...purgecss,
  },
};
