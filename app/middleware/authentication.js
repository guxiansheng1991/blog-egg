'use strict';

module.exports = options => {
  return async function authentication(ctx, next) {
    await next();
    const user = ctx.session.user;
    let res = false;
    if (!user) {
      const routeStr = ctx.request.url;
      for (let i = 0; i < options.excepts.length; i++) {
        if (options.excepts[i] === routeStr) {
          res = true;
          break;
        }
      }
    } else {
      res = true;
    }
    if (!res) {
      ctx.redirect('/user/login');
    }
  };
};
