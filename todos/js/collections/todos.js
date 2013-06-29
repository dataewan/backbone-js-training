
// js/collections/todos.js

var app = app || {};

// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote
// server.

var TodoList = Backbone.Collection.extend({
  model : app.Todo,
  localStorage : new Backbone.LocalStorage('todos-backbone'),

  completed : function() {
    return this.filter(function (todo) {
      return todo.get('completed');
    });
  },

  remaining : function() {
    return this.without.apply( this, this.completed() );
  },

  nextOrder : function() {
    if (!this.length){
      return 1;
    }
    return this.last().get('order') + 1;
  },

  comparator : function(todo) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();
