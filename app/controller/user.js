'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    await this.ctx.render('login');
  }
  async loginAction() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const remember = this.ctx.request.body.remember;
    const user = await this.ctx.service.user.login(userName, password);
    if (user._id) {
      // await this.ctx.render('blogs', user);
      this.ctx.redirect('/blog/list/1');
      this.ctx.session.user = user;
      if (remember) {
        this.ctx.session.maxAge = 3 * 24 * 3600 * 1000;
      }
    } else {
      const errObj = {
        msg: '账号或者密码错误!',
      };
      await this.ctx.render('error', errObj);
    }
  }
  async logoutAction() {
    this.ctx.session.user = null;
    this.ctx.redirect('/user/login');
  }
  async register() {
    await this.ctx.render('register');
  }
  async registerAction() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const res = await this.ctx.service.user.register(userName, password);
    if (res) {
      this.ctx.redirect('/user/login');
    } else {
      return;
    }
  }
}

module.exports = UserController;
