UberDictionary.Views.UsersShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  initialize: function (options) {
    this.defins = this.model.defins();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.defins, 'remove', this.render)
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.renderDefins();
    return this;
  },

  addDefin: function (defin) {
    var view = new UberDictionary.Views.DefinsShow({
      model: defin
    });

    this.addSubview('.defin-list', view)
  },

  renderDefins: function () {
    this.defins.each(this.addDefin.bind(this));
  }

});
