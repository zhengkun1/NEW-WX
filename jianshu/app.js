/**
 * 2017-11-1 zhengkun
 */


'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('usernickName').notNullable().defaultTo('');
        table.string('useravatarUrl').notNullable().defaultTo('');
        table.string('title').notNullable().defaultTo('');
        table.string('article').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const article = yield app.mysql.query(knex.schema.hasTable('article').toString());
    if (article.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('article', function(table) {
        table.increments();
        table.string('article').notNullable().defaultTo('');
        table.string('comment').notNullable().defaultTo('');
        table.string('like').notNullable().defaultTo('');
        table.string('collection').notNullable().defaultTo('');
        table.integer('give a like').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const comment = yield app.mysql.query(knex.schema.hasTable('comment').toString());
    if (comment.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('comment', function(table) {
        table.increments();
        table.string('article').notNullable().defaultTo('');
        table.string('comment').notNullable().defaultTo('');
        table.string('like').notNullable().defaultTo('');
        table.string('collection').notNullable().defaultTo('');
        table.integer('givealike').notNullable().defaultTo('0');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const attention = yield app.mysql.query(knex.schema.hasTable('attention').toString());
    if (attention.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('attention', function(table) {
        table.increments();
        table.string('attention').notNullable().defaultTo('');
        table.string('beattented').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    ctx.logger.info('some request data');

  });
};
