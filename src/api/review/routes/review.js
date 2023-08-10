'use strict';

/**
 * review router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::review.review', {
  prefix: '',
  only: ['find', 'findOne', 'create', 'update', 'delete'],
  except: [],
  config: {
    find: {},
    findOne: {},
    create: {},
    update: {
      policies: ['is-owner'],
    },
    delete: {
      policies: ['is-owner'],
    },
  },
});
