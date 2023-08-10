"use strict";

/**
 * review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    const review = await strapi.entityService.create("api::review.review", {
      data: {
        heading: ctx.request.body.data.heading,
        body: ctx.request.body.data.body,
        rating: ctx.request.body.data.rating,
        product: ctx.request.body.data.product,
        users_permissions_user: user.id,
      },
    });

    return { review };
  },
}));
