'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.blog.list);

  router.get('/user/login', controller.user.login);
  router.post('/user/loginAction', controller.user.loginAction);
  router.get('/user/logoutAction', controller.user.logoutAction);
  router.get('/user/register', controller.user.register);
  router.post('/user/registerAction', controller.user.registerAction);

  router.get('/blog/list/:page', controller.blog.list);
  router.get('/blog/add', controller.blog.add);
  router.post('/blog/addAction', controller.blog.addAction);
  router.get('/blog/detail/:id', controller.blog.detail);
  router.get('/blog/edit/:id/:currentPage', controller.blog.edit);
  router.post('/blog/editAction/:currentPage', controller.blog.editAction);
  router.get('/blog/delete/:id/:currentPage', controller.blog.delete);

  router.get('/category/list', controller.category.list);
  router.get('/category/add', controller.category.add);
  router.post('/category/addAction', controller.category.addAction);
  router.get('/category/detail/:id', controller.category.detail);
  router.get('/category/edit/:id', controller.category.edit);
  router.post('/category/editAction', controller.category.editAction);
  router.get('/category/delete/:id', controller.category.delete);
};
