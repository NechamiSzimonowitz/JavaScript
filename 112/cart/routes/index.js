var express = require('express');
var router = express.Router();
const items = require('../items.js');
const Cart = require('../cart.js');

/* GET home page. */
router.route('/')
  .get(function (req, res, next) {
    console.log('get - cart has', req.session.cart);

    res.render('layout', {
      title: 'Albums',
      items,
      partials: {
        content: 'index'
      }
    });
  })
  .post((req, res, next) => {
    const cart = new Cart(req.session.cart?.items);
    console.log('in post cart is', cart);
    req.session.cart = cart;
    cart.addItem(req.body.id, req.body.quantity);

    res.redirect('/');
  });

router.get('/viewCart', async (req, res, next) => {
  const cartItems = req.session.cart;

  const itemPromises = cartItems.map(async (item) => {
    const id = item.id;
    const response = await fetch('items.js');
    const items = await response.json();

    const checkMatching = items.find((item) => item.id === id);

    if (checkMatching) {
      return {
        itemName: item.name,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.price * item.quantity,
      }
    }
  })
  try {
    const cartDetails = await Promise.all(itemPromises);

    res.render('layout', {
      cartDetails,
      partials: {
        content: 'viewCart',
      }

    })
  }
  catch (e) {
    next(e);
  }


});

module.exports = router;