UberDictionary.Routers.Defins = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.$rootEl = $(options.rootEl);
    this.usersCollection = options.usersCollection;
  },

  routes: {
    '': 'definsIndex',
    'defins/search/:query': 'definsSearch',
    'users/new': 'usersNew',
    'users/:id': 'usersShow',
    'session/new': 'signIn',
    '_=_': 'signIn'
  },

  definsIndex: function () {
    var view = new UberDictionary.Views.DefinsIndex({
      collection: this.collection,
      usersCollection: this.usersCollection
    });
    this._swapView(view);
  },

  definsSearch: function (searchParams) {
    var searchCollection = new UberDictionary.Collections.SearchResults();
    searchCollection.fetch({ data: { query: searchParams } });

    var view = new UberDictionary.Views.DefinsIndex({
      collection: searchCollection
    });
    this._swapView(view);
  },

  usersShow: function (id) {
    var model = this.usersCollection.getOrFetch(id);
    var view = new UberDictionary.Views.UsersShow({
      model: model,
      collection: this.usersCollection
    });
    this._swapView(view);
  },

  usersNew: function (id) {
    var model = new UberDictionary.Models.User();
    var view = new UberDictionary.Views.UsersNew({
      model: model,
      collection: this.usersCollection
    });
    this._swapView(view);
  },

  signIn: function () {
    var view = new UberDictionary.Views.SessionNew({
      collection: this.usersCollection
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
