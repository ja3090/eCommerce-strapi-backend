"use strict";

/**
 * review router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::order.order", {
  prefix: "",
  only: ["find", "findOne", "create", "update", "delete"],
  except: [],
  config: {
    find: {},
    findOne: {
      policies: ["is-owner"],
    },
    create: {},
    update: {},
    delete: {},
  },
});
