UberDictionary.Routers.Defins = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.$rootEl = $(options.rootEl)
  },

  routes: {
    '': 'definsIndex',
    'defins/:id': 'definsShow',
    'defins/search/:query': 'definsSearch'
  },

  definsIndex: function () {
    var view = new UberDictionary.Views.DefinsIndex({
      collection: this.collection
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

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
