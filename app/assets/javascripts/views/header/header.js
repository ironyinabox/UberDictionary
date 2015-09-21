UberDictionary.Views.Header = Backbone.View.extend({

  template: JST['header/header'],

  render: function () {
    this.$el.html(
      this.template()
    );
    return this;
  }
});
