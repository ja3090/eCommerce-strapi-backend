# Strapi Backend for Tech eCommerce Frontend

# How to Run Locally

## Versions

    "node": "16.15.1"
    "npm": ">=6.0.0"
    "stripe": "^11.6.0"
    "@strapi/strapi": "4.10.7"

## Env Variables

#### Strapi Variables

APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET and JWT_SECRET have to be set in order for the program to work. Depending on your operating system, you have different options for generating secure keys for these variables. For Mac and Linux run the following:

    openssl rand -base64 32

On Windows however, you will have to open your terminal of choice at the root directory of the Strapi application, and run the following command:

    node -p "require('crypto').randomBytes(48).toString('base64');"

Both of which should give you a secure string which you can then copy and paste into your .env file. You can of course just assign a password of your choice, but that is less secure.

(Source)[https://docs.strapi.io/dev-docs/deployment/heroku#populate-the-environment-variables]

#### Cloudinary variables

Cloudinary has a very generous free tier, you will find the respective cloudinary variables on your dashboard upon making an account.

(Cloudinary)[https://cloudinary.com/]

#### Heroku and Database URL

This backend was deployed on Heroku, which Strapi has a good guide on how to do: (Strapi)[https://docs.strapi.io/dev-docs/deployment/heroku]. These do not have to be set for the program to function however (in fact DATABASE_URL is automatically assinged by Heroku, should you wish to deploy it).

#### Stripe and Publishable Key

Required for the payments processing to work. Stripe also has a free tier that lets you use a test store, upon creating an account you can find these keys on your dashboard. Link here: (Stripe)[https://stripe.com/gb].

