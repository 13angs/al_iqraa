const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN || 'http://al-iqraa.com';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: `http://al-iqraa.com/`
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'fragment': `fragment@${domain}/fragment/remoteEntry.js`,
                'dashboard': `dashboard@${domain}/dashboard/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);