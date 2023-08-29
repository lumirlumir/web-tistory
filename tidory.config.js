/* eslint-disable no-param-reassign */
const ESLintPlugin = require('eslint-webpack-plugin');

/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration
 */
module.exports = {
  ts_session: '723967f1735fb5c95b48667308c4c7d7255314ea',
  url: 'https://lumir.tistory.com/',

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: 'NONE',

    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag,
     * location
     * media,
     * guestbook
     */
    mode: 'index',
  },

  /**
   * Build
   */
  build: {
    /**
     * Assets public path
     */
    public_path: 'https://tistory1.daumcdn.net/tistory/5811831/skin/images',
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends(webpackConfig) {
    webpackConfig.plugins = [new ESLintPlugin(), ...webpackConfig.plugins];
    webpackConfig.module.rules = [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      ...webpackConfig.module.rules,
    ];
  },
};
