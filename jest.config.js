/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'some-css-transformer',
  },
};

module.exports = config;
