/* eslint-disable linebreak-style */
"use strict";
const utils = require("@strapi/utils");
const { PolicyError } = utils.errors;

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  const { id } = policyContext.params;
  const { user } = policyContext.state;

  const [order] = await strapi.entityService.findMany("api::order.order", {
    filters: { uuid: id },
    populate: "*",
  });

  if (order.user.id === user.id) return true;

  // eslint-disable-next-line quotes
  throw new PolicyError("You're not allowed to do this.");
};
