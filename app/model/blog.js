'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const BlogSchema = new Schema({
    title: { type: String },
    content: { type: String },
    category: { type: String },
    userId: { type: String },
  });
  return mongoose.model('Blog', BlogSchema);
};
