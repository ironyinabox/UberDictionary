UberDictionary.Routers.Defins = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = new UberDictionary.Collections.Defins();
    this.collection.fetch();
    this.$rootEl = $(options.rootEl)
  },

  routes: {
    '': 'definsIndex',
    'defins/new': 'definsNew',
    'defins/:id': 'definsShow'
  },

  definsIndex: function () {
    var view = new UberDictionary.Views.DefinsIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

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
