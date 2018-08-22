'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534300430738_2489';

  // add your config here
  config.middleware = [ 'authentication' ];
  // config.middleware = [];

  config.authentication = {
    excepts: [ '/user/login', '/user/register' ],
  };

  // view模板配置
  config.view = {
    // 配置view目录,可以多个,只需要在root数组中多个即可
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    // 配置模板引擎的后缀信息
    mapping: {
      '.nj': 'nunjucks',
    },
    // 默认的模板引擎
    defaultViewEngine: 'nunjucks',
    // 默认的view文件渲染后缀,配置此项可以在render函数中省略后缀名
    defaultExtension: '.nj',
  };

  // MongoDB配置
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/blogegg',
      options: {},
    },
  };

  // session设置
  config.session = {
    renew: true,
  };

  return config;
};
