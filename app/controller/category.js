'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async list() {
    const data = {
      list: [],
    };
    const res = await this.ctx.service.category.list();
    if (res) {
      data.list = res;
      await this.ctx.render('categorys', data);
    } else {
      const data = {
        msg: '获取类别列表失败, 请重试!',
      };
      await this.ctx.render('error', data);
    }
  }

  async add() {
    await this.ctx.render('categoryAdd');
  }

  async addAction() {
    const name = this.ctx.request.body.name;
    const res = await this.ctx.service.category.addAction(name);
    if (res) {
      this.ctx.redirect('/category/list');
    } else {
      const data = {
        msg: '增加失败, 请重试',
        name,
      };
      this.ctx.redirect('/category/add', data);
    }
  }

  async edit() {
    const id = this.ctx.params.id;
    const res = await this.ctx.service.category.findOne(id);
    const data = {
      msg: '',
      data: res,
    };
    await this.ctx.render('categoryEdit', data);
  }

  async editAction() {
    const id = this.ctx.request.body.id;
    const update = {
      name: this.ctx.request.body.name,
    };
    const res = await this.ctx.service.category.editAction(id, update);
    if (res) {
      this.ctx.redirect('/category/list');
    } else {
      this.ctx.redirect(`/category/edit/${id}`);
    }
  }

  async delete() {
    const id = this.ctx.params.id;
    await this.ctx.service.category.delete(id);
    this.ctx.redirect('/category/list');
  }

  async detail() {
    const id = this.ctx.params.id;
    const res = await this.ctx.service.category.findOne(id);
    const data = {
      msg: '',
      data: res,
    };
    await this.ctx.render('categoryDetail', data);
  }
}

module.exports = CategoryController;
