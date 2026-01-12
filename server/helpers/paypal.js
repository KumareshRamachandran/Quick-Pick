const paypal = require("paypal-rest-sdk");
require('dotenv').config();
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

paypal.configure({
  mode: "sandbox",
  client_id: client_id,
  client_secret: client_secret,
});

module.exports = paypal;
