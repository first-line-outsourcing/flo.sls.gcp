const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const slsw = require('serverless-webpack');
const destPath = path.join(__dirname, '.webpack');

module.exports = {
  entry: ['source-map-install.js','index.ts'],
  output: {
    libraryTarget: 'commonjs',
    path: slsw.lib.options ? destPath : __dirname,
    filename: 'index.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: slsw.lib.options ? 'production' : 'development',
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
    new Dotenv({
      path: slsw.lib.options ? `./.env.${slsw.lib.options.stage}` : './.env'
    })
  ],
};
