const { model, Schema } = require('mongoose');
const { reqString, reqNumber } = require('../utils/schemaUtils');

const userSchema = Schema({
  phone: reqString,
  name: reqString,
  rollNumber: reqString,
  semester: reqNumber,
  subjects: []
});

module.exports = model('users', userSchema);