const mongoose = require('mongoose');

// Article Schema
const articleSchema = mongoose.Schema({
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  category: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  comments: [{
    comment_subject:{
      type: String
    },
    comment_body:{
      type: String
    },
    comment_author:{
      type: String
    },
    comment_email:{
      type: String
    },
    comment_date:{
      type: String
    },
  }]
});

const Article = module.exports = mongoose.model('Article', articleSchema);

// Get Articles
module.exports.getArticles = function(callback, limit){
  Article.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//get article by category

module.exports.getcategoryArticles = function(category_id,callback){
  let query = {category : category_id}
  Article.find(query,callback).sort([['title' , 'ascending']]);
}
// Add Article
module.exports.addArticle = function(article, callback){
  Article.create(article, callback);
}

// Get Single Article By Id
module.exports.getArticleById = function(id, callback){
  Article.findById(id, callback);
}

// Update Article
module.exports.updateArticle = function(query, update, options, callback){
  Article.findOneAndUpdate(query, update, options, callback);
}

// Remove Article
module.exports.removeArticle = function(query, callback){
  Article.remove(query, callback);
}
