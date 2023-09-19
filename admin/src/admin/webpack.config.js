'use strict'
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { from: "config/*", to: '..', filter: (resourcePath) => !resourcePath.endsWith(".js") && !resourcePath.endsWith(".ts") },
      ],
    }),
  );

    config. devServer = {
      ...config.devServer,
      // This is required for webpack-dev-server. The path should  
      // be an absolute path to your build destination. 
      outputPath: path.join(process.cwd(), 'dist', 'build')
  }
  return config
}
