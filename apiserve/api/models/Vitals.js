/**
 * Vitals.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    minsp02: {
      type: 'string',
      required: true
    },
    maxsp02: {
      type: 'string',
      required: true
    },
    minbeat: {
	  type: 'string',
	  required: true
	},
	maxbeat: {
	  type: 'string',
	  required: true
	},
	mintemp: {
	  type: 'string',
	  required: true
	},
	maxtemp: {
	  type: 'string',
	  required: true
	},
	interval: {
	  type: 'string',
	  required: true
	},
    owner: {
	   model: 'patient',
	   unique: true
    }
  }
};