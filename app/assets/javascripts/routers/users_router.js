UberDictionary.Routers.Users = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.$rootEl = $(options.rootEl)
  },

  routes: {
    'users/new': 'usersNew',
    'users/:id': 'usersShow',
    'session/new': 'signIn'
  },

  usersShow: function (id) {
    var model = this.collection.getOrFetch(id);
    var view = new UberDictionary.Views.UsersShow({
      model: model,
      collection: this.collection
    });
    this._swapView(view);
  },

  usersNew: function (id) {
    var model = new UberDictionary.Models.User();
    var view = new UberDictionary.Views.UsersNew({
      model: model,
      collection: this.collection
    });
    this._swapView(view);
  },

  signIn: function () {
    var view = new UberDictionary.Views.SessionNew({
      collection: this.collection
    });
    this._swapView(view);
  },


  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
