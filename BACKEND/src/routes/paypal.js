// routes/paypal.js
router.post('/create-order', async (req, res) => {
    const { items } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in the order' });
    }
    
    // Crea la solicitud de la orden
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
      const order = await paypal.client().execute(request);
      res.json({ id: order.result.id });
    } catch (err) {
      res.status(500).send(err);
    }
  });
  