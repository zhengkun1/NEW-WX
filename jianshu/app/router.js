'use strict';

module.exports = app => {
  app.post('/jianshu', 'userinfo.addarticle');
  app.post('/myarticle', 'userinfo.selectuserinfo');
};
