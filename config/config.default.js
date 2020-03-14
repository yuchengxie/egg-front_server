/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584147684217_6710';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mongoose = {
    url: "mongodb://admin:qwerty123@118.190.105.235:27017/hzf_front",
    options: {
      // useUnifiedTopology: true,
    }
  }

  exports.jwt = {
    secret: "123456"
  };

  //跨域设置
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  

  return {
    ...config,
    ...userConfig,
  };
};
