const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const webpack = require('webpack');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dashboard/'
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': `./src/bootstrap`
            },
            shared: packageJson.dependencies
        }),

        new webpack.EnvironmentPlugin({
            HOST: 'http://localhost:5000',
            HUB_NAME: 'blogHub'
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);