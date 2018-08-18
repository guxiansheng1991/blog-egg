'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  async list(page, pageSize) {
    const user = this.ctx.session.user;
    let data = null;
    try {
      const res = await Promise.all([
        this.ctx.model.Blog.find({
          userId: user._id,
        }).skip(pageSize * (page - 1)).limit(pageSize),
        this.ctx.model.Blog.find().count(),
      ]);
      data = {
        list: res[0],
        totalPage: Math.ceil(res[1] / pageSize),
        currentPage: page,
      };
    } catch (error) {
      data = null;
      console.error('blog list error', error);
    }
    return data;
  }

  async findOne(id) {
    const user = this.ctx.session.user;
    let data = null;
    try {
      const res = await this.ctx.model.Blog.findOne({
        _id: id,
        userId: user._id,
      });
      data = res;
    } catch (error) {
      data = null;
      console.error('blog findOne error', error);
    }
    return data;
  }

  async add(title, content, category) {
    let res = null;
    const user = this.ctx.session.user;
    try {
      res = this.ctx.model.Blog.create({
        title,
        content,
        category,
        userId: user._id,
      });
    } catch (error) {
      res = null;
      console.error('error, 创建失败', error);
    }
    return res;
  }

  async editAction(id, update) {
    let res = null;
    try {
      res = await this.ctx.model.Blog.findByIdAndUpdate(id, update);
    } catch (error) {
      res = null;
      console.error('error, 更新微博失败', error);
    }
    return res;
  }

  async delete(id) {
    let res = null;
    try {
      res = await this.ctx.model.Blog.remove({
        _id: id,
      });
    } catch (error) {
      res = {
        n: 0,
        ok: 0,
      };
      console.error('error, 删除失败', error);
    }
    return res;
  }
}

module.exports = BlogService;
