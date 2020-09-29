const purgecss =
  process.env.NODE_ENV === 'production'
    ? {
        '@fullhuman/postcss-purgecss': {
          content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          whitelist: ['html', 'body'],
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
