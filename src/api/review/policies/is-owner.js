"use strict";
const utils = require("@strapi/utils");
const { PolicyError } = utils.errors;

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  const { id } = policyContext.params;
  const { user } = policyContext.state;

  const review = await strapi.entityService.findOne("api::review.review", id, {
    populate: "*",
  });

  if (review.user.id === user.id) {
    return true;
  }

  // eslint-disable-next-line quotes
  throw new PolicyError("You're not allowed to do this.");
};
