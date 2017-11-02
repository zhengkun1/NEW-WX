/**
 * 2017-9-23 zhengkun
 */


'use strict';
module.exports = app => {
  class Test extends app.Service {
    * addarticle(res) {
      try {
        yield app.mysql.insert('user', res);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }
    * selectuserinfo(usernickName) {
      let a;
      try {
        a = yield app.mysql.select('user', {
          where: { usernickName: usernickName.usernickName },
        });
      } catch (a) {
        this.ctx.logger.error(a);
        return false;
      }
      return a;
    }
  }
  return Test;
};
