const { model, Schema } = require('mongoose');
const { reqString, reqNumber } = require('../utils/schemaUtils');

const resourceSchema = Schema({
  description: String,
  mediaId: reqString,
  filename: reqString,
  tag: { },
});

module.exports = model('resources', resourceSchema);