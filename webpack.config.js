const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const slsw = require('serverless-webpack');
const destPath = path.join(__dirname, '.webpack');

console.log(slsw.lib.options.stage)

module.exports = {
  entry: ['source-map-install.js','index.ts'],
  output: {
    libraryTarget: 'commonjs',
    path: process.env.NODE_ENV !== 'prod' ? __dirname : destPath,
    filename: 'index.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: process.env.NODE_ENV !== 'prod' ? 'development' : 'production',
  // we use webpack-node-externals to excludes all node deps.
  // You can manually set the externals too.
  externals: [nodeExternals({ modulesDir: path.resolve(__dirname, './node_modules') })],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: [/\.(test|e2e)\.ts$/],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin.TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
  },
  plugins: [
    new Dotenv()
  ],
};
