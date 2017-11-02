'use strict';

module.exports = app => {
  class UserinfoController extends app.Controller {
    * addarticle() {
      this.ctx.body = yield this.service.userinfo.addarticle(this.ctx.request.body);
    }
    * selectuserinfo() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.userinfo.selectuserinfo(this.ctx.request.body);
    }
    * mainpage() {
      this.ctx.body = yield this.service.userinfo.mainpage(this.ctx.request.body);
    }
  }
  return UserinfoController;
};
