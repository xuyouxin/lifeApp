import * as path from "path";
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo: EggAppInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {} as PowerPartial<EggAppConfig>;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569726327483_2758';

  // add your middleware config here
  config.middleware = [ 'error' ];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://cdwc.top/life',
      options: {
        poolSize: 5,
        reconnectTries: 30,
        reconnectInterval: 10000,
      },
    },
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
