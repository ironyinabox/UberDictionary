UberDictionary.Views.DefinsIndex = Backbone.View.extend({

  template: JST['defins/index'],
  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ defins: this.collection });
    this.$el.html(content);
    return this;
  }

});
