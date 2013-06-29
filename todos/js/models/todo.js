// js/models/todo.js
//

var app = app || {};

//  Todo model
//  ----------
//  Our basic todo model has `title`, `order` and `completed` attributes

app.Todo = Backbone.Model.extend({
  defaults : {
    title : '',
    completed : false
  },

  toggle : function(){
    this.save({
      completed: !this.get('completed')
    });
  }
});
