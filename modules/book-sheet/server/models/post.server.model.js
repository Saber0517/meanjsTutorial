'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
  // Post model fields
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'The could not be blank'
  },
  text: {
    type: String,
    default: '',
    trim: true
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Post', PostSchema);
