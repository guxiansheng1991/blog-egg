'use strict';

// had enabled by egg
// exports.static = true;

// 模板引擎插件启用
exports.nunjucks = {
  enabled: true,
  package: 'egg-view-nunjucks',
};

// 配置MongoDB
exports.mongoose = {
  enabled: true,
  package: 'egg-mongoose',
};
