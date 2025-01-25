// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const path = require('path');

// TODO: breaking after Tailwind major bump to v4.
// Find fix so that it doesn't break linting app/global.css (presumably with the tailwind directives)
//
// const buildEslintCommand = (filenames) =>
//   `next lint --fix --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx,css}': [
    'prettier --write',
    // buildEslintCommand
  ],
};
