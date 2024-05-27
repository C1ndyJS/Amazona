// routes/paypal.js
const express = require('express');
const router = express.Router();
const paypal = require('@paypal/checkout-server-sdk');
const Environment = paypal.core.SandboxEnvironment;
const Client = paypal.core.PayPalHttpClient;

const clientId = 'AcF5OHweSQAK88ezr4nwwpn5nFe9tbQnpT9fmRZ9GhwUuQkD2PRrL7M5HV7eD5oPGlMFA3-1QW0hV5Ck';
const clientSecret = 'EM1puTD_cRo4-V8ayADYUmSrKi20V1zfs3JIEzubEbYOGLKdMnIg4Zevv1e_6-ci5qiWJuM85Qt-saw9';

const environment = new Environment(clientId, clientSecret);
const client = new Client(environment);

router.post('/create-order', async (req, res) => {
  const { items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'No items in the order' });
  }

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
          }
        }
      },
      items: items.map(item => ({
        name: item.name,
        unit_amount: {
          currency_code: 'USD',
          value: item.price.toFixed(2)
        },
        quantity: item.quantity
      }))
    }]
  });

  try {
    const order = await client.execute(request);
    res.json({ id: order.result.id });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
