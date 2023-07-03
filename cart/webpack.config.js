const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const fs = require('fs');
const path = require('path');

// Manually expose all files in modules folder
const exposedModules = fs
  .readdirSync('./src/modules')
  .filter((file) => file.endsWith('.tsx'))
  .reduce((exposes, file) => {
    const moduleName = file.replace('.tsx', '');
    exposes[`./${moduleName}`] = path.resolve(
      __dirname,
      `./src/modules/${file}`
    );
    return exposes;
  }, {});
const optimization = {
  chunkIds: 'named', // for this example only: readable filenames in production too
};
const stats = {
  chunks: true,
  modules: false,
  chunkModules: true,
  chunkOrigins: true,
};
const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: 'http://localhost:3001/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // optimization,
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: exposedModules,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  stats,
});
