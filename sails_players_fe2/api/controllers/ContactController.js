


var Client = require('node-rest-client').Client;
var client = new Client();
var endpoint = "http://rolodex-of-terror.herokuapp.com/cards"


module.exports = {


  read: function(req, res) {

    client.get(endpoint, function (data, response) {

      for (let contact of data) {

        if (contact.addresses === undefined || contact.addresses.length === 0) {
          contact.addresses = [{
            address_type: '',
            address_street: '',
            address_city: '',
            address_state: '',
            address_zip: ''
          }];
        }

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
        return res.send(data);
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the contacts"}});
    });
  },


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


  sendAddresses: function(req, res) {
    var args = {
      data: req.body,
      headers: {
        "Content-Type": "application/json"
      }
    };
    client.put(`${endpoint}/${req.params.id}/addresses/${req.params.addressId}`, args, function (data, response) {
      req.addFlash("success", "Record updated successfully");
      return res.redirect('/update');
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the contacts"}});
    });
  },

  sendPhones: function(req, res) {
    var args = {
      data: req.body,
      headers: {
        "Content-Type": "application/json"
      }
    };
    client.put(`${endpoint}/${req.params.id}/phones/${req.params.phoneId}`, args, function (data, response) {
      req.addFlash("success", "Record updated successfully");
      return res.redirect('/update');
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the contacts"}});
    });
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
