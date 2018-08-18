# blog-egg

基于egg的个人博客系统

需要实现如下功能:
- 博客crud
- 支持博客分类
- 最好能有权限管理,用户能操作自己的博客
- 评论功能可选
- 点赞功能可选

数据库使用MongoDB

模板view使用官方支持的 egg-view-nunjucks

目标是简单的实现功能即可, 主要练习使用egg技术
## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org