const { model, Schema } = require('mongoose');
const { reqString, reqNumber } = require('../utils/schemaUtils');

const resourceSchema = Schema({
  name: reqString,
  rollNumber: reqString,
  semester: reqNumber,
  subjects: [],
  tag: { type: Schema.Types.ObjectId, ref: 'tags' },
});

module.exports = model('resources', resourceSchema);