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
    var target = this.$(".query")
    var query = target.val();
    Backbone.history.navigate("defins/search/" + query, { trigger: true })
  }
});
