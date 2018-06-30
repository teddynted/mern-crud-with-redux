const express = require('express');
const router = express.Router();
const Directory = require('../models/directory');

module.exports = function() {

  /* Get business directory listings */
  router.get('/read', async (req, res) => {
    try {
      let directory_list = await Directory.find({});
      res.send(directory_list);
    } catch ( err ) {
      return res.status(500).send(err);
    }
  });

  /* Create a business directory entry */
  router.post("/create", async ( req, res ) => {
      let directory = new Directory({
         name: req.body.name,
         description: req.body.description,
         phone: req.body.phone,
         email_address: req.body.email_address,
         physical_address: req.body.physical_address,
         createdAt: new Date(Date.now())
      });
      try{
        let newDirectory = await directory.save();
        res.send({ response: 'success'});
      } catch (err){
        res.send({ response: err });
      }
  });

  /* Get a listing by a business id */
  router.get('/readbyid/', async ( req, res ) => {
     try {
       let record = await Directory.findOne({ _id: req.query.id });
       res.send(record);
     } catch ( err ) {
       return res.status(500).send(err);
     }
  });
     
  /* Update a business directory entry */
  router.put('/update', async ( req, res ) => {
      try {
        let directory = await Directory.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true });
        res.send({ response: 'success' });
      } catch (err) {
        res.send({ response: err });
      }
  });

  /* Delete business directory entry */
  router.delete('/delete', async (req, res) => {
      try {
        let directory = await Directory.findOneAndRemove({ _id: req.query.entryid });
        return res.send({ response: 'success' });
      } catch (err) {
        return res.send({ response: err });
      }
  });

  return router;

};