"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);
const { v4: uuidv4 } = require("uuid");

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const DOMAIN =
      process.env.NODE_ENV === "production"
        ? "https://tech-ecommerce-one.vercel.app/"
        : "http://localhost:3000/";

    const { address, products, user } = ctx.request.body.data;

    const lineItems = await Promise.all(
      products.map(async (el) => {
        const product = await strapi
          .service("api::product.product")
          .findOne(el.id);

        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: product.Name,
            },
            unit_amount: Math.round(product.Price * 100),
          },
          quantity: el.quantity,
        };
      })
    );

    const createOrder = await strapi.service("api::order.order").create({
      data: {
        products,
        address,
        user,
        uuid: uuidv4(),
      },
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${DOMAIN}success/${createOrder.uuid}`,
      payment_method_types: ["card"],
    });

    return { session };
  },
  async findOne(ctx) {
    const { id } = ctx.request.params;

    const order = await strapi.entityService.findMany("api::order.order", {
      filters: { uuid: id },
    });

    return { order };
  },
}));
