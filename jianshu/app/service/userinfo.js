/**
 * 2017-9-23 zhengkun
 */


'use strict';
module.exports = app => {
  class Test extends app.Service {
    * addarticle(res) {
      try {
        console.log('[REQ-BODY]:', res);
        yield app.mysql.insert('user', res);
        const articleBody = {
          article: res.article,
        };
        yield app.mysql.insert('article', articleBody);
      } catch (b) {
        this.ctx.logger.error(b);
        return false;
      }
      return true;
    }
    * selectuserinfo(name) {
      let a;
      try {
        a = yield app.mysql.select('user', {
          where: { usernickName: name.usernickName },
        });
      } catch (a) {
        this.ctx.logger.error(a);
        return false;
      }
      return a;
    }
    * mainpage() {
      let a;
      try {
        a = yield app.mysql.select('user', {
          where: { id: 100 },
        });
      } catch (a) {
        this.ctx.logger.error(a);
        return false;
      }
      return a;
    }
    * getall() {
      let a;
      try {
        a = yield app.mysql.select('user');
      } catch (a) {
        this.ctx.logger.error(a);
        return false;
      }
      return a;
    }
    * secret() {
      let a;
      try {
        a = yield app.mysql.select('user', {
          where: { id: 100 },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return a;
    }
    * comment(res) {
      let a;
      try {
        a = yield app.mysql.insert('article', res);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return a;
    }
  }
  return Test;
};
