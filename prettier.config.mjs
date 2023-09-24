/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  pluginSearchDirs: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};