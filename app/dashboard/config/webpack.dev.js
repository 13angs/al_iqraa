const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');


const devConfig = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3002,
        historyApiFallback: true
    },
    output: {
        publicPath: 'http://localhost:3002/',
    },
    plugins: [
        // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),

        new webpack.EnvironmentPlugin({
            HOST: 'http://localhost:5000',
            HUB_NAME: 'blogHub'
        })
    ],
};
module.exports = merge(commonConfig, devConfig);
