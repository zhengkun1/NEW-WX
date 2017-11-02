'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * add() {
      this.ctx.body = 'hi,sb';
    }
  }
  return HomeController;
};
