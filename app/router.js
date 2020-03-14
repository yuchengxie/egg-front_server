'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/uploadTag',controller.home.uploadTag);
  router.get('/tagList',controller.home.tagList);
};
