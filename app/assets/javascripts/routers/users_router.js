UberDictionary.Routers.Users = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = new UberDictionary.Collections.Users();
    this.collection.fetch();
    this.$rootEl = $(options.rootEl)
  },

  routes: {
    'users/:id': 'usersShow'
  },

  usersShow: function (id) {
    var model = this.collection.getOrFetch(id);
    var view = new UberDictionary.Views.UsersShow({
      model: model,
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
