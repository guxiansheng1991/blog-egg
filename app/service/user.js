'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(userName, password) {
    let list = null;
    try {
      list = await this.ctx.model.User.findOne({
        userName,
        password,
      });
    } catch (error) {
      list = null;
      console.error('error', error);
    }
    return list;
  }
  async register(userName, password) {
    let res = null;
    try {
      res = await this.ctx.model.User.create({
        userName,
        password,
      });
    } catch (error) {
      res = null;
      console.error('error, 创建失败', error);
    }
    return res;
  }
}

module.exports = UserService;
