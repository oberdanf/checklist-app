'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var EmployeeSchema = new Schema({
  progress: Number,
  name: String,
  date: Date,
  responsible: String
});

mongoose.model('Employee', EmployeeSchema);