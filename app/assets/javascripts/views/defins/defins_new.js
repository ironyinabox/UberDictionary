UberDictionary.Views.DefinsNew = Backbone.View.extend({

  template: JST['defins/new'],

  events: {
    'submit form': 'submit'
  },

  render: function () {
    var content = this.template({ defin: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var data = $(e.currentTarget).serializeJSON();
    debugger
    this.model.save(data.defin, {
      success: function (defin) {
        Backbone.history.navigate('', { trigger: true })
      },
      error: function () {
        alert("you got probs")
      }
    });
  }

});
