'use strict';

module.exports = app => {
  app.post('/jianshu', 'userinfo.addarticle');
  app.post('/myarticle', 'userinfo.selectuserinfo');
  app.post('/mainpage', 'userinfo.mainpage');
  app.post('/getall', 'userinfo.getall');
  app.post('/secret', 'userinfo.secret');
  app.post('/comment', 'userinfo.comment');
};
