/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Client = require('node-rest-client').Client;
var client = new Client();
var endpoint = "http://rolodex-of-terror.herokuapp.com/cards"


module.exports = {






  /**
   * `StudentController.read()`
   */
  read: function(req, res) {

    client.get(endpoint, function (data, response) {
      // Loop through all of the contacts to check if
      // there are missing addresses for the table
      for (let contact of data) {
        // if the addresses array is not there or empty,
        // create a "fake address" for empty strings in
        // the table
        if (contact.addresses === undefined || contact.addresses.length === 0) {
          contact.addresses = [{
            address_type: '',
            address_street: '',
            address_city: '',
            address_state: '',
            address_zip: ''
          }];
        }
        // if the phone numbers array is not there or empty,
        // create a "fake phone number" for empty strings in
        // the table
        if (contact.phoneNumbers === undefined || contact.phoneNumbers.length === 0) {
          contact.phoneNumbers = [{
            phone_number: '',
            phone_type: ''
          }];
        }
      }
        return res.view('read', {contacts: data});
    }).on('error', function (err) {
        return res.view('read', {error: { message: "There was an error getting the contacts"}});
    });
  },


  send: function(req, res) {

    client.get(`${endpoint}/${req.params.id}`, function (data, response) {
        return res.send(stub);
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the contacts"}});
    });
  },

  sendAddresses: function(req, res) {
    sails.log(req.params.id)
    client.get(`${endpoint}/${req.params.id}/addresses`, function (data, response) {
      sails.log(data)
        return res.send(data);
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the contacts"}});
    });
  },


  /**
   * `StudentController.create()`
   */
  create: function(req, res) {

    if (req.method != "POST") {
      return res.view('create');
    }

    var args = {
      data: req.body,
      headers: {
        "Content-Type": "application/json"
      }
    };

    client.post(endpoint, args, function(data, response) {
      // return res.view('create', {success: { message: "Record added successfully"}});
      if (response.statusCode != "200") {
        req.addFlash("error", data.message.substring(data.message.indexOf("•")));
        return res.redirect('/create');
      }

      req.addFlash("success", "Record created successfully");
      return res.redirect('/create');

    })

  },





  /**
   * `StudentController.update()`
   */
  update: function(req, res) {

    if (req.method != "POST") {

      client.get(endpoint, function(data, response) {
        return res.view('update', {
          contacts: data
        });
      }).on('error', function(err) {
        return res.view('update', {
          error: {
            message: "There was an error getting the contacts"
          }
        });
      });

    } else {

      var args = {
        data: req.body,
        headers: {
          "Content-Type": "application/json"
        }
      };

      client.put(endpoint + "/" + req.body.id, args, function(data, response) {

        if (response.statusCode != "200") {
          req.addFlash("error", data.message);
          return res.redirect('/update');
        }

        req.addFlash("success", "Record updated successfully");
        return res.redirect('/update');

      })

    }
  },

  /**
   * `StudentController.delete()`
   */
  delete: function(req, res) {

    if (req.method != "POST") {

      client.get(endpoint, function(data, response) {
        return res.view('delete', {
          contacts: data
        });
      }).on('error', function(err) {
        return res.view('delete', {
          error: {
            message: "There was an error getting the contacts"
          }
        });
      });

    } else {

      client.delete(endpoint + "/" + req.body.id, function(data, response) {

        if (response.statusCode != "200") {
          req.addFlash("error", data.message);
          return res.redirect('/delete');
        }

        req.addFlash("success", "Record deleted successfully");
        return res.redirect('/delete');

      })
    }

  }

};
