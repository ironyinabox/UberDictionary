UberDictionary.Views.Header = Backbone.View.extend({

  template: JST['defins/header'],
  events: {
    'change .query': 'definsSearch'
  },

  render: function () {
    this.$el.html(
      this.template()
    );
    return this;
  },

  definsSearch: function (e) {
    e.preventDefault();
    query = this.$(".query").val();
    Backbone.history.navigate("defins/search", { trigger: true })
  }
});
