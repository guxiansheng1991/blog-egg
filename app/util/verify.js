'use strict';

module.exports = {
  /**
   * @param {目标对象} targetObj 目标对象
   * @param {验证规则} rules 验证规则
   */
  verify(targetObj, rules) {
    let res = {
      flag: false,
      msg: '',
    };
    rules.forEach(element => {
      switch (element.type) {
        case 'String':
          if (targetObj[element.name] === targetObj[element.illegal]) {
            res.flag = false;
            res.msg += `${element.name} 不能为空值,`;
          }
          break;
        case 'Number':
          if (targetObj[element.name] === targetObj[element.illegal]) {
            res.flag = false;
            res.msg += `${element.name} 不能为空值,`;
          }
          break;
        case 'Boolean':
          if (targetObj[element.name] === targetObj[element.illegal]) {
            res.flag = false;
            res.msg += `${element.name} 不能为空值,`;
          }
          break;
        default:
          break;
      }
    });
  }
};