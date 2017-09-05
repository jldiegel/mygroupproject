/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstName:  {
      type: 'string',
      required: true
    },

    lastName:  {
      type: 'string',
      required: true
    },

    number:  {
      type: 'integer',
      required: true,
      max: 99,
      min: 1
    },

    position:  {
      type: 'string',
      uppercase: true,
      required: true,
      maxLength: 2
    }


  },

  migrate: 'alter',
  schema: true

};
