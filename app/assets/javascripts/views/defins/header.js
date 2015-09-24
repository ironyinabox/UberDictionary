UberDictionary.Views.Header = Backbone.View.extend({

  template: JST['defins/header'],
  events: {
    'change .query': 'definsSearch',
    'click #new-def': 'newDefModal'
  },

  render: function () {
    this.$el.html(
      this.template()
    );
    return this;
  },

  definsSearch: function (e) {
    e.preventDefault();
    var query = this.$(".query").val();
    Backbone.history.navigate("defins/search/" + query, { trigger: true })
  },

  newDefModal: function () {
    var defin = new UberDictionary.Models.Defin();
    var view = new UberDictionary.Views.DefinsNew({
      model: defin,
      collection: this.collection
    });
    $('body').append(view.render().$el);
  }
});
