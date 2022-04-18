const express = require("express");

const router = express.Router();

const Order = require("../model/order");

router.get("/orders", (req, res, next) => {
  Order.find(function (err, orders) {
    if (err) console.log("routes.js: err to 'find()' products : ", err);
    res.json(orders);
  });
});

router.post("/order", (req, res, next) => {
  let newOrder = new Order({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    code: req.body.code,
  });

  newOrder.save((err, order) => {
    console.log("routes->save(): order : ", order);
    if (err) {
      res.json({ msg: "Failed to add order" });
    } else {
      res.json({ msg: "order added successfully...!", newOrder: order });
    }
  });
});

//delete order
router.delete("/order/:id", (req, res, next) => {
  Order.remove({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//update order
router.put("/order/:id", (req, res, next) => {
  Product.findOne({ _id: req.params.id }, function (err, order) {
    if (err) {
      res.json(err);
    } else {
      order.name = req.body.name;
      order.email = req.body.email;
      order.phone = req.body.phone;
      order.address = req.body.address;
      order.code = req.body.code;

      order.save((err, order) => {
        if (err) res.json({ msg: "Failed to update Order" });
        else res.json(order);
      });
    }
  });
});

module.exports = router;
