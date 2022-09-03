const { model, Schema } = require('mongoose');
const { reqString, reqNumber } = require('../utils/schemaUtils');

const userSchema = Schema({
  phone: reqNumber,
  name: reqString,
  rollNumber: reqString,
  otp: Number,
  otpExpiry: Date,
  otpExpired: Boolean,
  semester: reqNumber,
  subjects: [String],
  token:String;
}, { timestamps: true });

module.exports = model('users', userSchema);