'use strict';

module.exports = app => {
  class UserinfoController extends app.Controller {
    * addarticle() {
      console.log(this.ctx.request.body, '12111');
      this.ctx.body = yield this.service.userinfo.addarticle(this.ctx.request.body);
    }
    * selectuserinfo() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.userinfo.selectuserinfo(this.ctx.request.body);
    }
    * mainpage() {
      this.ctx.body = yield this.service.userinfo.mainpage(this.ctx.request.body);
    }
    * getall() {
      this.ctx.body = yield this.service.userinfo.getall(this.ctx.request.body);
    }
    * secret() {
      this.ctx.body = yield this.service.userinfo.secret(this.ctx.request.body);
    }
    * comment() {
      this.ctx.body = yield this.service.userinfo.comment(this.ctx.request.body);
    }
  }
  return UserinfoController;
};
