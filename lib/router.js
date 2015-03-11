Router.configure({
  layoutTemplate: 'layout',
  // Sets a loading template until the waitOn returns
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postPage', 
  data: function() {
    // Returns the context of the post
    return Posts.findOne(this.params._id)
  }
});

// To ensure that the route for postPage has a proper ID
Router.onBeforeAction('dataNotFound', {only: 'postPage'});