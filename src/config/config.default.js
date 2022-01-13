/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576384476895_3620'

  // add your middleware config here
  config.middleware = []

  config.mysql = {
    client: {
      host: '101.35.83.133',
      port: '3356',
      user: 'xnj',
      password: 'xnj123',
      database: 'xnj',
    },
    app: true,
    agent: false,
  };

  // add your user config here
  const userConfig = {
    view: {
      mapping: {
        '.html': 'nunjucks'
      }
    }
  }

  return {
    ...config,
    ...userConfig
  }
}
