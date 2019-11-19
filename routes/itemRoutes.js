const express = require('express');
const itemModel = require('../models/item');
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/items', async (req, res) => {
  const items = await itemModel.find({});

  try {
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/item', async (req, res) => {
    const item = new itemModel(req.body);
  
    try {
      await item.save();
      res.send(item);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/item/:id', async (req, res) => {
    try {
      const item = await itemModel.findByIdAndDelete(req.params.id)
  
      if (!item) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

  app.put('/item/:id', async (req, res) => {
    try {
      await itemModel.findOneAndUpdate(req.params.id, req.body)
      await itemModel.save();
      res.status(200).send()
      res.send(item);
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app