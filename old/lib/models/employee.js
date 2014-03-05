'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var EmployeeSchema = new Schema({
  progress: {
    type: Number,
    required: true,
    default: 0
  }
  ,
  name: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: false,
  },
  responsible: {
    type: String,
    required: true,
    trim: true
  }
});

mongoose.model('Employee', EmployeeSchema);