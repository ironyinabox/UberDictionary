UberDictionary.Routers.Defins = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = new UberDictionary.Collections.Defins();
    this.collection.fetch();
    this.$rootEl = $(options.rootEl)
  },

  routes: {
    '': 'definsIndex',
    'defins/new': 'definsNew',
    'defins/:id': 'definsShow',
    'defins/search': 'definsSearch'
  },

  definsIndex: function () {
    var view = new UberDictionary.Views.DefinsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  // definsSearch: function () {
  //   var searchCollection = UberDictionary.Collections.SearchResults();
  //   searchCollection.fetch({
  //     data: { query }
  //   });
  //   var view = new UberDictionary.Views.DefinsIndex({
  //     collection: searchCollection
  //   });
  //   this._swapView(view);
  // },

  definsNew: function () {
    var defin = new UberDictionary.Models.Defin();
    var view = new UberDictionary.Views.DefinsNew({
      model: defin,
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
