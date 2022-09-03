const { model, Schema } = require('mongoose');
const { reqString, reqNumber } = require('../utils/schemaUtils');

const tagSchema = Schema({//database aggregation (pipeline) to be implemented later 
  phone: reqString,
  name: reqString,
  subject: reqString,
  deadline: String,//baadmestring
});

module.exports = model('tags', tagSchema);