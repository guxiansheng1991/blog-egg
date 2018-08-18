'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async authCallback() {
    this.ctx.body = '鉴权成功';
  }
}

module.exports = HomeController;
