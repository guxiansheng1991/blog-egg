'use strict';

const Controller = require('egg').Controller;
// const verify = require('../util/verify');

class BlogController extends Controller {
  async list() {
    const page = this.ctx.params.page;
    const pageSize = 10;
    const res = await this.ctx.service.blog.list(page, pageSize);
    await this.ctx.render('blogs', res);
  }

  async add() {
    const data = {
      msg: '',
      title: '',
      content: '',
      categoryId: '4',
    };
    await this.ctx.render('blogAdd', data);
  }

  async addAction() {
    const title = this.ctx.request.body.title;
    const content = this.ctx.request.body.content;
    const categoryId = this.ctx.request.body.categoryId;
    let msg = '';
    if (!title) {
      msg += 'title不能为空值, ';
    }
    if (!content) {
      msg += 'content不能为空值, ';
    }
    if (!categoryId) {
      msg += 'category不能为空值, ';
    }
    if (!msg) {
      const res = await this.ctx.service.blog.add(title, content, categoryId);
      if (res) {
        this.ctx.redirect('/blog/list/1');
      } else {
        const data = {
          msg: '新增失败, 请重试',
          title,
          content,
          categoryId,
        };
        await this.ctx.render('/blog/add', data);
      }
    } else {
      const data = {
        message: msg,
        title,
        content,
        categoryId,
      };
      await this.ctx.render('/blog/add', data);
    }
  }

  async edit() {
    const id = this.ctx.params.id;
    // const currentPage = this.ctx.params.currentPage;
    const res = await this.ctx.service.blog.findOne(id);
    const data = {
      msg: '',
      data: res,
    };
    await this.ctx.render('blogEdit', data);
  }
  async editAction() {
    const id = this.ctx.request.body.id;
    const currentPage = this.ctx.params.currentPage;
    const update = {
      title: this.ctx.request.body.title,
      content: this.ctx.request.body.content,
    };
    const res = await this.ctx.service.blog.editAction(id, update);
    if (res) {
      this.ctx.redirect(`/blog/list/${currentPage}`);
    } else {
      this.ctx.redirect(`/blog/edit/${id}/${currentPage}`);
    }
  }

  async delete() {
    const id = this.ctx.params.id;
    const currentPage = this.ctx.params.currentPage;
    await this.ctx.service.blog.delete(id);
    this.ctx.redirect(`/blog/list/${currentPage}`);
  }

  async detail() {
    const id = this.ctx.params.id;
    const res = await this.ctx.service.blog.findOne(id);
    const data = {
      msg: '',
      data: res,
    };
    await this.ctx.render('blogDetail', data);
  }
}

module.exports = BlogController;
