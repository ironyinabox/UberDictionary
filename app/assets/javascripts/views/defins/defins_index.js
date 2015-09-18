UberDictionary.Views.DefinsIndex = Backbone.CompositeView.extend({

  template: JST['defins/index'],

  initialize: function (options) {
    this.listenTo(this.collection, 'sync destroy', this.render)
  },

  render: function () {
    var content = this.template({ defins: this.collection });
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
    this.collection.each(this.addDefin.bind(this));
  }
});
